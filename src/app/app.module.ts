import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBoxComponent } from './shared/components/search-box/search-box.component';
import { ShowCardComponent } from './shared/components/show-card/show-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ShowCardComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
