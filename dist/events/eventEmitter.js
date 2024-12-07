"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventEmitter = void 0;
const node_events_1 = __importDefault(require("node:events"));
exports.eventEmitter = new node_events_1.default;
exports.eventEmitter.on('userAdded', (userName, userCity) => {
    console.log(`${userName} from ${userCity} is added`);
});
exports.eventEmitter.on('userDeleted', (userName) => {
    console.log(`${userName} is deleted`);
});
