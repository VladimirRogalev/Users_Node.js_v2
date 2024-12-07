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
exports.userRoutes = void 0;
const userRoutes = (req, res, controller) => __awaiter(void 0, void 0, void 0, function* () {
    const { method, url } = req;
    switch (url + method) {
        case '/api/users' + 'GET': {
            controller.getUsers(req, res);
            break;
        }
        case '/api/users' + 'DELETE': {
            yield controller.removeUser(req, res);
            break;
        }
        case '/api/users' + 'POST': {
            yield controller.addUser(req, res);
            break;
        }
        default: {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Error');
        }
    }
});
exports.userRoutes = userRoutes;
