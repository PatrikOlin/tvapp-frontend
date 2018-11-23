import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private userService: UserService, public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.login(this.email, this.password);
      form.resetForm();
      this.dialogRef.close();
    }
  }

}
