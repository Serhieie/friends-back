const createVerifyMarkupMessage = () => {
  const verifyMarkupMessage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification</title>
         <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Bebas+Neue&family=Electrolize&family=Iceland&display=swap"
      rel="stylesheet"
    />
        <style>
            body {
                  font-family: "Montserrat", sans-serif;
                margin: 0;
                padding: 0;
                background-color: #255C69;
            }

            .container {
                  font-family: "Montserrat", sans-serif;
                max-width: 600px;
                margin: 15% auto;
                padding: 20px;
                background-color: #012B35;
                border-radius: 12px;
            }

            h1 {
                color: #D4B46A;
                text-align: center;
                margin-bottom: 20px;
            }

            p {
                color: #FFE5AA;
                font-size:18px;
                margin-bottom: 10px;
                text-align: center;
            }

            .button {
                font-family: "Montserrat", sans-serif;
                display: block;
                width: 160px;
                font-size: 18px;
                background-color: #AA8739;
                    color: #FFE5AA;
                text-decoration: none;
                text-align: center;
                margin: 30px auto 0px;
                padding: 10px 20px;
                border-radius: 5px;
                transition: background-color 0.3s ease;
            }

            .button:hover {
                     color: #FFE5AA;
                background-color: #805F15;
            }

            .text {
                 color: #AA4639;
                text-align: center;
                font-size: 22px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Thank you! Email verification succes</h1>
            <p>Lets start to use crypto-helper</p>
            <p><a class="button" href="https://serhieie.github.io/crypto-helper/">To login</a></p>
        </div>
    </body>
    </html> 
  `;
  return verifyMarkupMessage;
};

module.exports = createVerifyMarkupMessage;
