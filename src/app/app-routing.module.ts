import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBoxComponent } from './shared/components/search-box/search-box.component';
import { ShowDetailsComponent } from './shared/components/show-details/show-details.component';
import { WatchlistComponent } from './shared/components/watchlist/watchlist.component';


const appRoutes: Routes = [
  {path: '', component: SearchBoxComponent},
  {path: 'showdetails/:id', component: ShowDetailsComponent},
  {path: 'watchlist', component: WatchlistComponent}
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
