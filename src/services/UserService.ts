import {User} from '../models/user';

export interface UserService {
    getUsers(): User[];
    getAllAddress(): { zipCode: number, city: string }[];
    addUser(user:User):boolean;
    removeUser(id:number): User|null;
}