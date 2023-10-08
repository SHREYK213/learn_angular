import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  users: any[] = [];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}
