import EventEmitter from 'node:events';

export const eventEmitter = new EventEmitter;

eventEmitter.on('userAdded', (userName: string, userCity: string) => {
    console.log(`${userName} from ${userCity} is added`);
});

eventEmitter.on('userDeleted', (userName: string) => {
    console.log(`${userName} is deleted`);
});