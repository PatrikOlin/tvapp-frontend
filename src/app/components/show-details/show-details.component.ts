import { SnackbarService } from './../../shared/services/snackbar.service';
import { Component, OnInit, Input } from '@angular/core';
import { ShowDetails } from '../../shared/interfaces/show-details';
import { ApiCallerService } from 'src/app/shared/services/apiCaller.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { Season } from '../../shared/interfaces/season';
import * as moment from 'moment';

const now = moment().format('LLLL');

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  show: ShowDetails;
  seasons: Season[];
  BASE_URI = 'http://image.tmdb.org/t/p/w400/';


  constructor(
    private apiCaller: ApiCallerService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService,
    private snackbar: SnackbarService) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.apiCaller.getShowDetails(params.get('showId')))
      ).subscribe((data) => {
        this.show = data;
        this.show.poster_path = this.BASE_URI + this.show.poster_path;
        this.show.id = data.id;
        if (data.airsTime != null && data.next_episode_to_air != null) {
          this.show.nextEpisodeLocal = moment(data.next_episode_to_air.air_date + ' ' + data.airsTime)
          .local().format('YYYY-MM-DD HH:mm');
        }
        this.seasons = data.seasons;
        console.log(this.seasons);
      },
      err => {console.log('Error', err);
      },
      () => {
        console.log('FÄRDIG');
      });
      console.log(this.show);
  }

  addToWatchlist(showId: number) {
    const userId = +sessionStorage.getItem('userId');
    this.show.onWatchList = true;
    this.apiCaller.addToWatchlist(userId, showId).subscribe((res) => {
      console.log('POST skickat, allt gick finfint. Ersätt denna console.log med snackbar-bekräftelse', res);
    },
    err => {
      console.log('Nåt gick snett med POSTen', err);
    },
    () => {
      console.log('Här tar POST-observablen slut!');
      this.snackbar.handleMessage('Added ' + this.show.title + ' to your watchlist.');
    });
  }

  removeFromWatchlist(showId: string) {
    this.show.onWatchList = false;
    this.apiCaller.removeFromWatchlist(showId).subscribe((res) => {
      console.log('Serien borttagen från watchlist');
    },
    err => {
      console.log('Nått gick fel', err);
    },
    () => {
      this.snackbar.handleMessage('Removed ' + this.show.title + ' from your watchlist.');
    });

/*   let showDetails: ShowDetails;
  this.apiCaller.getShowDetails(showId).subscribe((data) => {
    showDetails = data;
    console.log(showDetails);
  }); */

}
