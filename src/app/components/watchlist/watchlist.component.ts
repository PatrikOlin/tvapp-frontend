import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../shared/interfaces/show';
import { ApiCallerService } from 'src/app/shared/services/apiCaller.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  show: Show;
  shows: Show[];
  BASE_URI = 'http://image.tmdb.org/t/p/w185/';

  constructor(
    private apiCaller: ApiCallerService,
    private loaderService: LoadingService) {
   }

  ngOnInit() {
    this.getWatchlist();
  }

  getWatchlist() {
    this.loaderService.show();
    this.apiCaller.getWatchlist().subscribe(
      data => {
        this.shows = <any>data;
        console.log(this.shows);
      },
      err => {
        this.loaderService.hide();
        console.log(err);
      },
      () => {
        this.loaderService.hide();
      });
  }

}
