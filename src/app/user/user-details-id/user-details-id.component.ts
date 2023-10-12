import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-details-id',
  templateUrl: './user-details-id.component.html',
  styleUrls: ['./user-details-id.component.scss'],
})
export class UserDetailsIdComponent {
  userId: number;
  user: any; 

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = +params['id']; 
      this.user = this.userService.getUserById(this.userId);
    });
  }
  goBackToUserPage() {
    this.router.navigate(['/user']);
  }
}

