import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../interfaces/show';
import { ShowDetails } from '../../interfaces/show-details';
import { ApiCallerService } from 'src/app/services/apiCaller.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  show: ShowDetails;
  BASE_URI = 'http://image.tmdb.org/t/p/w400/';


  constructor(
    private apiCaller: ApiCallerService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.apiCaller.getShowDetails(params.get('id')))
      ).subscribe((data) => {
        this.show = data;
        this.show.poster_path = this.BASE_URI + this.show.poster_path;
        this.show.id = data.id;
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
    });
  }

  removeFromWatchlist(showId: string) {
    this.show.onWatchList = false;
    this.apiCaller.removeFromWatchlist(showId).subscribe((res) => {
      console.log('Serien borttagen från watchlist');
    },
    err => console.log('Nått gick fel', err));
  }

/*   let showDetails: ShowDetails;
  this.apiCaller.getShowDetails(showId).subscribe((data) => {
    showDetails = data;
    console.log(showDetails);
  }); */

}
