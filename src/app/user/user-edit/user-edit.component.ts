import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { ValidatorsService } from 'src/app/validators.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  myForm: FormGroup;
  userId: number;
  userData: any;
  maxDate: Date;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      id: [''], // Initialize 'id' as an empty string for now
      name: ['', [Validators.required, ValidatorsService.nameValidator()]],
      email: ['', [Validators.required, ValidatorsService.emailValidator()]],
      phone: ['', [Validators.required, ValidatorsService.phoneValidator()]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
    });
    this.maxDate = new Date();
  }

  ngOnInit() {
    // Get the 'id' parameter from the route
    this.route.params.subscribe((params) => {
      this.userId = +params['id']; // Convert 'id' to a number
      // Fetch user details based on 'userId'
      this.userData = this.userService.getUserById(this.userId);
      // Prefill the form controls based on this.userData
      this.myForm.patchValue({
        id: this.userData.id, // Update 'id' based on user data if available
        name: this.userData.name,
        email: this.userData.email,
        dob: this.userData.dob,
        phone: this.userData.phone,
        gender: this.userData.gender,
      });
    });
  }

  // Implement your form submission logic here
  onSubmit() {
    if (this.myForm.valid) {
      const userData = this.myForm.value;
      // Handle user ID generation here, possibly by finding the maximum ID in your user data and adding one
      const newUserId = this.userService.generateUniqueId();
      userData.id = newUserId;
      this.userService.addUser(userData);
      this.myForm.reset();
      this.router.navigate(['/user']);
    }
  }
}
