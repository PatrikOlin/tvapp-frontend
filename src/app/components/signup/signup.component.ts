import { PasswordValidator } from './../../shared/directives/password-validator.directive';
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

  email;
  password;
  confirmPassword;

  constructor(
    private userSerivce: UserService,
    public dialogRef: MatDialogRef<SignupComponent>,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
  }

  onSubmit() {
    this.userSerivce.signup(this.email, this.password);
    this.dialogRef.close();
  }

}
