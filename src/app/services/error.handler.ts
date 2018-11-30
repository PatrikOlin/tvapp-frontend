import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandler {

  constructor(public snackbar: MatSnackBar) {}

  public handleError(err: any) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['custom-snackbar'];
    config.duration = 10000;
    this.snackbar.open(err.message, 'close', config);
  }
}
