"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_events_1 = __importDefault(require("node:events"));
const server_1 = require("./server");
const PORT = 3000;
const eventEmitter = new node_events_1.default();
eventEmitter.on('userAdded', (userName) => {
    console.log(`${userName} is added`);
});
eventEmitter.on('userRemoved', (userName) => {
    console.log(`${userName} is removed`);
});
const server = (0, server_1.launchServer)();
