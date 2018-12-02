import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../shared/interfaces/show';
import { Season } from '../../shared/interfaces/season';
import { ApiCallerService } from 'src/app/shared/services/apiCaller.service';

@Component({
  selector: 'app-season-card',
  templateUrl: './season-card.component.html',
  styleUrls: ['./season-card.component.css']
})
export class SeasonCardComponent implements OnInit {

  @Input() season: Season;
  @Input() show: Show;
  BASE_URI = 'http://image.tmdb.org/t/p/w185';

  constructor(private apiCaller: ApiCallerService) { }

  ngOnInit() {
    this.season.poster_path = this.BASE_URI + this.season.poster_path;
  }

  onClick() {
    this.getSeasonDetails(this.show.id, this.season.season_number);
  }

  getSeasonDetails(showId: number, season: number) {

  }

}
