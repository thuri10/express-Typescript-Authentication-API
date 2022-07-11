"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router.post("/", userController_1.registerNewUserHandler);
//pass uuid params to the  functions
router.get("/:uuid", userController_1.getUserDetails);
router.delete("/:uuid", userController_1.deleteUserHandler);
router.put("/:uuid", userController_1.updateUserHandler);
router.post('/login', authController_1.LoginHandler);
exports.default = router;
