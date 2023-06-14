"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const home_controllers_1 = require("../controllers/home.controllers");
const checkLogin_1 = require("../middleware/checkLogin");
exports.router = express_1.default.Router();
exports.router.get('/login', checkLogin_1.checkLogin, home_controllers_1.HomeControllers.logIn);
//# sourceMappingURL=routers.js.map