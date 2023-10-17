import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: any[] = [];
  public nextId: number = 1; 

  constructor() {}

  addUser(user: any) {
    user.id = this.nextId++;
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  getUserById(id: number): any {
    return this.users.find((user) => user.id === id);
  }
  updateUser(userId: number, updatedUserData: any): void {
    const userIndex = this.users.findIndex((user) => user.id === userId);

    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUserData };
    }
  }

  deleteUser(userId: number): void {
    this.users = this.users.filter((user) => user.id !== userId);
  }
}

