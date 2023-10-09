import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  users: any[] = [];
  ngOnInit() {}
  searchId: number;

  // Function to navigate to user details by ID
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
}
