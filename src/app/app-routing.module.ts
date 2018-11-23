import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBoxComponent } from './shared/components/search-box/search-box.component';


const appRoutes: Routes = [
  {path: '', component: SearchBoxComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
