import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@src/app/services/userServices/user.service';
import { ValidatorsService } from '@src/app/services/validatorServices/validators.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  myForm: FormGroup;
  userId: number=0;
  maxDate: Date;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      id: [this.userId],
      name: ['', [Validators.required, ValidatorsService.nameValidator()]],
      email: ['', [Validators.required, ValidatorsService.emailValidator()]],
      phone: ['', [Validators.required, ValidatorsService.phoneValidator()]],
      dob: ['', Validators.required],

      gender: ['', Validators.required],
    });
    this.maxDate = new Date();
  }

  onSubmit() {
    if (this.myForm.valid) {
      const userData = this.myForm.value;
      this.userId++;
      this.myForm.get('id').setValue(this.userId);
      console.log(userData);
      this.userService.addUser(userData);
      this.myForm.reset();
      this.router.navigate(['/user']);
    }
  }
  resetForm() {
    this.myForm.reset();
  }
  isFormEmpty() {
    const formControls = this.myForm.controls;
    for (const controlName in formControls) {
      if (formControls.hasOwnProperty(controlName)) {
        const control = formControls[controlName];
        if (!control.pristine || control.value) {
          return false;
        }
      }
    }
    return true;
  }

}
