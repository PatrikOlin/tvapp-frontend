import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackbar: MatSnackBar) { }

  public handleMessage(msg: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['custom-snackbar'];
    config.duration = 3000;
    this.snackbar.open(msg, 'Ok', config);
  }

  public handleError(err: any) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['custom-error-snackbar'];
    config.duration = 5000;
    this.snackbar.open(err.message, 'close', config);
  }
}
