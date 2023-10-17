import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '@src/app/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  users: any[] = [];
  ngOnInit() {}
  searchId: number;

  searchUser() {
    if (this.searchId) {
      this.router.navigate(['/user', this.searchId]);
    }
  }
  constructor(private userService: UserService, private router: Router) {
    this.users = this.userService.getUsers();
  }
  navigateToAddUser() {
    this.router.navigate(['/user/add']);
  }
  editUser(userId: number) {
    this.router.navigate(['/user/edit', userId]);
  }
  displayedColumns: string[] = ['name', 'email', 'dob', 'phone', 'gender', 'actions'];

  deleteUser(userId: number) {
    this.userService.deleteUser(userId);

    this.users = this.users.filter((user) => user.id !== userId);
  }
}
