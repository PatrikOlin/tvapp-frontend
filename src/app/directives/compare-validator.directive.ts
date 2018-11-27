import { Directive, Input, Attribute, forwardRef, OnInit } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[compare][formControlNAme], [compare][formControl], [compare][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CompareValidatorDirective, multi: true}]
})

export class CompareValidatorDirective implements Validator, OnInit {
  private valFn;

  constructor() {}

  ngOnInit(): void {
    this.valFn = this.validatePassword();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.valFn(c);
  }

  validatePassword(): ValidatorFn {
    return (control: AbstractControl) => {
      let isValid = false;
      if (control && control instanceof FormGroup) {
        const group = control as FormGroup;
        if (group.controls['password'] && group.controls['confirmPassword']) {
          isValid = group.controls['password'].value == group.controls['confirmPassword'].value;
        }
      }
      if (isValid) {
        return null;
      } else {
        return { 'passwordCheck': 'failed' };
      }
    };
  }
}
