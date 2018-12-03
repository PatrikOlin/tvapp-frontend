import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../../shared/interfaces/episode';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.css']
})
export class EpisodeCardComponent implements OnInit {

  @Input() episode: Episode;
  BASE_URI = 'http://image.tmdb.org/t/p/w185';
  constructor() { }

  ngOnInit() {
    this.episode.still_path = this.BASE_URI + this.episode.still_path;
  }

}
