import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor() {}

  // Custom validator for a name field

  static nameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control.value) {
        return null; // No validation error if the field is empty
      }

      const trimmedValue = control.value.trim(); // Trim leading and trailing whitespace

      if (!trimmedValue) {
        return { invalidName: true }; // Validation error if the field is just whitespace
      }

      const regex = /^[a-zA-Z ]+$/; // Only letters and spaces allowed
      if (!regex.test(trimmedValue)) {
        return { invalidName: true }; // Validation error if the pattern doesn't match
      }

      // Update the form control value to the trimmed value
      control.setValue(trimmedValue);

      return null; // No validation error if the pattern matches
    };
  }

  // Custom validator for an email field
  static emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control.value) {
        return null; // No validation error if the field is empty
      }

      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Email pattern
      if (!regex.test(control.value)) {
        return { invalidEmail: true }; // Validation error if the pattern doesn't match
      }

      return null; // No validation error if the pattern matches
    };
  }

  // Custom validator for a phone number field
  static phoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control.value) {
        return null; // No validation error if the field is empty
      }

      const regex = /^[0-9]{10}$/; // 10 digits and only numbers allowed
      if (!regex.test(control.value)) {
        return { invalidPhone: true }; // Validation error if the pattern doesn't match
      }

      return null; // No validation error if the pattern matches
    };
  }
}
