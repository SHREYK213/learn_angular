import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: any[] = [];
  private nextId: number = 1; // Initialize the ID counter

  constructor() {}

  addUser(user: any) {
    // Assign a unique ID to the user
    user.id = this.nextId++;
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  getUserById(id: number): any {
    // Find and return the user with the specified ID
    return this.users.find((user) => user.id === id);
  }
  generateUniqueId(): number {
    // Generate a unique ID based on the current value of nextId
    return this.nextId++;
  }
}
