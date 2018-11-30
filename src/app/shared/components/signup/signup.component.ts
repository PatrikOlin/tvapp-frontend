import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  password: string;
  confirmPassword: string;

  constructor(private userSerivce: UserService, public dialogRef: MatDialogRef<SignupComponent>) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

  }

}
