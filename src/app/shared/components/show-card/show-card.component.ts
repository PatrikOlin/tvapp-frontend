import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../interfaces/show';
import { ApiCallerService } from 'src/app/services/apiCaller.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

  @Input() show: Show;
  BASE_URI = 'http://image.tmdb.org/t/p/w185/';

  constructor(
    private apiCaller: ApiCallerService,
    public router: Router) {
   }

  ngOnInit() {
    console.log(this.router.url);
    this.show.poster_path = this.BASE_URI + this.show.poster_path;
  }

}
