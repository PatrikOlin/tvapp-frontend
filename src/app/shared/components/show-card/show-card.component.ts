import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../show/show';
import { ApiCallerService } from 'src/app/services/apiCaller.service';
import { ShowDetails } from '../../show/show-details';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

  @Input() show: Show;
  isFavorite = false;
  BASE_URI = 'http://image.tmdb.org/t/p/w185/';

  constructor(private apiCaller: ApiCallerService) {
   }

  ngOnInit() {
    this.show.poster_path = this.BASE_URI + this.show.poster_path;
  }

  toggleFavorite(show: Show) {
    if (this.isFavorite === false || this.isFavorite === undefined) {
      this.isFavorite = true;
    } else if (this.isFavorite === true || this.isFavorite === undefined) {
      this.isFavorite = false;
    }
  }

}
