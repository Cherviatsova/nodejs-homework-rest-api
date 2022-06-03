const express = require("express");

const router = express.Router();

const { contacts: ctrl } = require("../../controllers");
const { validation } = require("../../middlewares");
const { contactShema } = require("../../schemas");
const validateMiddleware = validation(contactShema);

router.get("/", ctrl.getAll);
router.get("/:contactId", ctrl.getById);
router.post("/", validateMiddleware, ctrl.add);
router.delete("/:contactId", ctrl.removeById);
router.put("/:contactId", validateMiddleware, ctrl.updateById);

module.exports = router;
