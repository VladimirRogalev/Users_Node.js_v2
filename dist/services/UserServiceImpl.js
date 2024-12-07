"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceImpl = void 0;
class UserServiceImpl {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        if (this.users.findIndex(elem => elem.id === user.id) === -1) {
            this.users.push(user);
            return true;
        }
        return false;
    }
    getUsers() {
        return this.users;
    }
    removeUser(id) {
        const index = this.users.findIndex(elem => elem.id === id);
        if (index === -1) {
            return null;
        }
        const [victim] = this.users.splice(index, 1);
        return victim;
    }
    getAllAddress() {
        return this.users.map(user => ({ zipCode: user.zipCode, city: user.city }));
    }
}
exports.UserServiceImpl = UserServiceImpl;
