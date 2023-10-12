import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  myForm: FormGroup;
  userId: number;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      name: [''],
      email: [''],
      dob: [''],
      phone: [''],
      gender: [''],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = +params['id'];
      this.user = this.userService.getUserById(this.userId);

      if (this.user) {
        this.myForm.patchValue({
          name: this.user.name,
          email: this.user.email,
          dob: this.user.dob,
          phone: this.user.phone,
          gender: this.user.gender,
        });
      }
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Get the updated user data from the form
      const updatedUserData = this.myForm.value;

      // Update the user details using the UserService
      this.userService.updateUser(this.userId, updatedUserData);

      // Navigate back to the user details page
      this.router.navigate(['/user']);
    }
  }
}