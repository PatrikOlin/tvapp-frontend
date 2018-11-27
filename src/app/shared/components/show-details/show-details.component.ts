import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../show/show';
import { ShowDetails } from '../../show/show-details';
import { ApiCallerService } from 'src/app/services/apiCaller.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
    ) { }

  ngOnInit() {

    this.show = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.apiCaller.getShowDetails(params.get('id')))
      ).subscribe((data) => {
        this.show = data;
        this.show.poster_path = this.BASE_URI + this.show.poster_path;
        this.show.name = data.serieName;
      });
      console.log(this.show);
  }

/*   let showDetails: ShowDetails;
  this.apiCaller.getShowDetails(showId).subscribe((data) => {
    showDetails = data;
    console.log(showDetails);
  }); */

}
