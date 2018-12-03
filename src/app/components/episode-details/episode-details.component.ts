import { ApiCallerService } from './../../shared/services/apiCaller.service';
import { Episode } from './../../shared/interfaces/episode';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/shared/services/loading.service';
import * as moment from 'moment';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {

  episode: Episode;
  BASE_URI = 'http://image.tmdb.org/t/p/w780';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private loader: LoadingService,
    private apiCaller: ApiCallerService) { }

  ngOnInit() {
    this.loader.show();
    let showId;
    let seasonId;
    let episodeId;

    this.route.params.subscribe((res) => {
      showId = res.showId;
      seasonId = res.seasonId;
      episodeId = res.episodeId;
    });
    console.log(showId, seasonId, episodeId);

    this.apiCaller.getEpisodeDetails(showId, seasonId, episodeId)
      .subscribe((data) => {
        this.episode = data;
        this.episode.still_path = this.BASE_URI + this.episode.still_path;
        this.episode.air_date = moment(this.episode.air_date).local().format('YYYY-MM-DD');
      },
      err => {
        this.loader.hide();
      },
      () => {
        this.loader.hide();
      });
  }

}
