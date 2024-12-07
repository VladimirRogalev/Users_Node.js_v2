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
exports.UserController = void 0;
const parseBody_1 = require("../utils/parseBody");
const eventEmitter_1 = require("../events/eventEmitter");
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getUsers(req, res) {
        const users = this.userService.getUsers();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
    removeUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = yield (0, parseBody_1.parseBody)(req);
            const victim = this.userService.removeUser(body.id);
            if (victim !== null) {
                eventEmitter_1.eventEmitter.emit('userRemoved', victim.name);
            }
            const users = this.userService.getUsers();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(users));
        });
    }
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = yield (0, parseBody_1.parseBody)(req);
            const isSuccess = this.userService.addUser(body);
            if (isSuccess) {
                eventEmitter_1.eventEmitter.emit('userAdded', body.name);
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('User added');
            }
            else {
                res.writeHead(409, { 'Content-Type': 'text/plain' });
                res.end('User is already exist');
            }
        });
    }
}
exports.UserController = UserController;
