const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { Server } = require("socket.io");
const { createServer } = require("http");
const { validateMessage } = require("./helpers/dirtFilter");
// const webSocketLogout = require("./helpers/webSocketLogout");
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const usersRouter = require("./routes/api/users");
const contactsRouter = require("./routes/api/contacts");
const messagesRouter = require("./routes/api/messages");

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("chat-message", async ({ message, sender }) => {
    try {
      const newMessage = await validateMessage(message, sender);
      await newMessage.save();
      io.emit("chat-message", newMessage);
    } catch (error) {
      throw error;
    }
  });
  socket.on("disconnect", () => {
    const userId = socket.handshake.query.userId;
    console.log("A user disconnected", userId);
  });
});

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/messages", messagesRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server Error" } = err;
  res.status(status).json({ message });
});

module.exports = httpServer;
