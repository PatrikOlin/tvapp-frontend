import { FormGroup } from '@angular/forms';

export class SignupValidator {
  static validate(signUpFormGroup: FormGroup) {
    const password = signUpFormGroup.controls.password.value;
    const confirmPassword = signUpFormGroup.controls.confirmPassword.value;

    if (confirmPassword.length <= 0) {
      return null;
    }

    if (confirmPassword !== password) {
      return {
        doesMatchPassword: true
      };
    }
    return null;
  }
}
