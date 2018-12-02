import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../../shared/interfaces/season';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Episode } from '../../shared/interfaces/episode';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.css']
})
export class SeasonDetailsComponent implements OnInit {

  season: Season;
  episodes: Episode[];
  BASE_URI = 'http://image.tmdb.org/t/p/w400/';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private loader: LoadingService) { }

  ngOnInit() {
    this.loader.show();
    this.route.data
      .subscribe((data: {season: Season}) => {
        console.log(data.season);
        this.season = data.season;
        this.episodes = data.season.episodes;
        this.loader.hide();
      },
      (err) => {
        console.log('Nu gick nåt galet med att hämta season');
      },
      () => {

      });
      this.season.poster_path = this.BASE_URI + this.season.poster_path;
  }

}
