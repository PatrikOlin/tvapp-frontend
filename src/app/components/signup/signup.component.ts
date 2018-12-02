import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { MatDialogRef } from '@angular/material';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupValidator } from '../../shared/validators/Signup.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpFormGroup: FormGroup;
  passwordFormGroup: FormGroup;

  constructor(
    private userSerivce: UserService,
    public dialogRef: MatDialogRef<SignupComponent>,
    private formBuilder: FormBuilder) {
      this.passwordFormGroup = this.formBuilder.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, {
        validator: SignupValidator.validate.bind(this)
      });
      this.signUpFormGroup = this.formBuilder.group({
        username: ['', Validators.required],
        passwordFormGroup: this.passwordFormGroup
      });
     }

  ngOnInit() {
  }

  onSubmit() {

  }

}
