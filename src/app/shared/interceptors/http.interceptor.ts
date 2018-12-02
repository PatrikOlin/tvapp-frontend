import { SnackbarService } from './../services/snackbar.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse
} from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private userService: UserService, public snackbar: SnackbarService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + this.userService.getKey(),
      'user_id': this.userService.getEncodedUserId()
    });

    const cloneReq = req.clone({headers});
    return next
      .handle(cloneReq)
      .pipe(tap((event: HttpEvent<any>) => {
        console.log(event);
      }),
      catchError(err =>  {
        if (err instanceof HttpErrorResponse) {
          this.snackbar.handleError(err);
        }
          return throwError(err);
        })
      );
  }

}
