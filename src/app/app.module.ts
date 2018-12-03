import { SnackbarService } from './shared/services/snackbar.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatDialogModule, MatSnackBarModule, MatTooltipModule } from '@angular/material/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClickStopPropagationDirective } from './shared/directives/click-stop-propagation.directive';
import { RequestInterceptor } from './shared/interceptors/http.interceptor';
import { UrlSanitizerPipe } from './shared/pipes/url-sanitizer.pipe';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { PasswordValidatorDirective } from './shared/directives/password-validator.directive';
import { DefaultValuePipe } from './shared/pipes/default-value.pipe';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoadingService } from './shared/services/loading.service';
import { EpisodeCardComponent } from './components/episode-card/episode-card.component';
import { SeasonCardComponent } from './components/season-card/season-card.component';
import { SeasonDetailsComponent } from './components/season-details/season-details.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { FooterComponent } from './components/footer/footer.component';


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
    PasswordValidatorDirective,
    WatchlistComponent,
    LoadingSpinnerComponent,
    EpisodeCardComponent,
    SeasonCardComponent,
    SeasonDetailsComponent,
    EpisodeDetailsComponent,
    FooterComponent
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
    SnackbarService,
    LoadingService,
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NavbarComponent,
    SignupComponent,
    LoginComponent
  ],
  exports: [
    LoadingSpinnerComponent,
    EpisodeCardComponent,
    SeasonCardComponent,
    SeasonDetailsComponent,
    EpisodeDetailsComponent,
    FooterComponent]
})
export class AppModule { }
