import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../../../services/apiCaller.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Show } from '../../show/show';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  searchForm = new FormGroup({
    searchQuery: new FormControl()
  });
  shows: Show[] = [];
  show: Show;

  constructor(private apiCaller: ApiCallerService) {}

  onSubmit(query) {
    console.log('query', query);
    this.fetchShow(query);
  }

  fetchShow(searchQuery: string) {
    this.apiCaller.searchShows(searchQuery).subscribe(
      data => {
        this.shows = <any>data;
        console.log(this.shows);
      },
      err => console.log(err),
      () => console.log('done loading shows')
    );
  }


/*   fetchShows(searchQuery: string) {
    this.apiCaller.searchShows(searchQuery).subscribe(
      data => {
        this.shows = data;
        console.log(this.shows[0]);
      },
      err => console.log(err),
      () => console.log('done loading shows')
    );
  }
 */
}
