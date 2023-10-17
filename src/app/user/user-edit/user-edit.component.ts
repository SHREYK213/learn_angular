import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@src/app/services/userServices/user.service';
import { ValidatorsService } from '@src/app/services/validatorServices/validators.service';



@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  myForm: FormGroup;
  userId: number;
  user: any;
  maxDate: Date;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, ValidatorsService.nameValidator()]],
      email: ['', [Validators.required, ValidatorsService.emailValidator()]],
      phone: ['', [Validators.required, ValidatorsService.phoneValidator()]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
    });
    this.maxDate = new Date();

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
      const updatedUserData = this.myForm.value;

      this.userService.updateUser(this.userId, updatedUserData);

      this.router.navigate(['/user']);
    }
  }
}