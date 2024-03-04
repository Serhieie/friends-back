const express = require("express");
const ctrl = require("../../controllers/assetsControllers");

const router = express.Router();

const { validateBody, isValidId, autenticate } = require("../../middlewares");
const { schemas } = require("../../models/asset");

router.get("/", autenticate, ctrl.getAll);

router.get("/:id", autenticate, isValidId, ctrl.getById);

router.post("/", autenticate, validateBody(schemas.createAssetSchema), ctrl.post);

router.patch(
  "/:id/favorite",
  isValidId,
  autenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

router.delete("/:id", autenticate, isValidId, ctrl.remove);

router.put(
  "/updateAll",
  autenticate,
  validateBody(schemas.updateAllAssetsSchema),
  ctrl.updateAllAssets
);

router.put(
  "/:id",
  autenticate,
  isValidId,
  validateBody(schemas.updateAssetSchema),
  ctrl.update
);

module.exports = router;
