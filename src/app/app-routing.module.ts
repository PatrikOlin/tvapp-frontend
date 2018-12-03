import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { SeasonDetailsComponent } from './components/season-details/season-details.component';
import { SeasonDetailResolverService } from './shared/resolvers/season-detail-resolver.service';


const appRoutes: Routes = [
  {path: '', component: SearchBoxComponent},
  {path: 'showdetails/:showId', component: ShowDetailsComponent},
  {path: 'showdetails/:showId/season/:seasonId', component: SeasonDetailsComponent, resolve: {
    season: SeasonDetailResolverService
  }},
  {path: 'showdetails/:showId/season/:seasonId/episode/:episodeId', component: EpisodeDetailsComponent},
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
