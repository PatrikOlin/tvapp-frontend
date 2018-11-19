import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../show/show';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

  @Input() show: Show;
  @Input() title: string;
  @Input() nextEpisode: string;

  constructor() {
   }

  ngOnInit() {
  }

}
