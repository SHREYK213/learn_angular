import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-details-id',
  templateUrl: './user-details-id.component.html',
  styleUrls: ['./user-details-id.component.scss'],
})
export class UserDetailsIdComponent {
  userId: number;
  user: any; // Define the user object to store user details

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    // Get the 'id' parameter from the route
    this.route.params.subscribe((params) => {
      this.userId = +params['id']; // Convert 'id' to a number
      // Fetch user details based on 'userId'
      this.user = this.userService.getUserById(this.userId);
    });
  }
}
