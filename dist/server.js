"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchServer = void 0;
const http_1 = require("http");
const userRoutes_1 = require("./routes/userRoutes");
const config_1 = require("./config/config");
const UserServiceImpl_1 = require("./services/UserServiceImpl");
const UserController_1 = require("./controllers/UserController");
const userService = new UserServiceImpl_1.UserServiceImpl();
const userController = new UserController_1.UserController(userService);
const launchServer = () => (0, http_1.createServer)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, userRoutes_1.userRoutes)(req, res, userController);
})).listen(config_1.config.port, () => {
    console.log(`Started on address : http://localhost:${config_1.config.port}`);
});
exports.launchServer = launchServer;
