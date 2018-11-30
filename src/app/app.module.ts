import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatDialogModule, MatSnackBarModule, MatTooltipModule } from '@angular/material/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBoxComponent } from './shared/components/search-box/search-box.component';
import { ShowCardComponent } from './shared/components/show-card/show-card.component';
import { LoginComponent } from './shared/components/login/login.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';
import { RequestInterceptor } from './interceptors/http.interceptor';
import { ErrorHandler } from './services/error.handler';
import { UrlSanitizerPipe } from './pipes/url-sanitizer.pipe';
import { ShowDetailsComponent } from './shared/components/show-details/show-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignupComponent } from './shared/components/signup/signup.component';
import { CompareValidatorDirective } from './directives/compare-validator.directive';
import { DefaultValuePipe } from './pipes/default-value.pipe';
import { WatchlistComponent } from './shared/components/watchlist/watchlist.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { LoadingService } from './services/loading.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ShowCardComponent,
    LoginComponent,
    NavbarComponent,
    ClickStopPropagationDirective,
    UrlSanitizerPipe,
    DefaultValuePipe,
    ShowDetailsComponent,
    SignupComponent,
    CompareValidatorDirective,
    WatchlistComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    MatDialogModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTooltipModule
  ],
  providers: [
    ErrorHandler,
    LoadingService,
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NavbarComponent,
    SignupComponent,
    LoginComponent
  ],
  exports: [LoadingSpinnerComponent]
})
export class AppModule { }
