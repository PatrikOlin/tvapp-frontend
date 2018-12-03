import { Directive, Input, Attribute, forwardRef, OnInit } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';


export const PasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value ? {'passwordMatch': true} : null;
};

@Directive({
  selector: '[appPasswordValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true}]
})

export class PasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return PasswordValidator(control);
  }
}
