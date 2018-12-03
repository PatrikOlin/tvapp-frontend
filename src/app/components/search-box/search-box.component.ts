import { SnackbarService } from './../../shared/services/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../../shared/services/apiCaller.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Show } from '../../shared/interfaces/show';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  searchForm = new FormGroup({
    searchQuery: new FormControl()
  });
  shows: Show[] = [];
  show: Show;

  constructor(
    private apiCaller: ApiCallerService,
    public userService: UserService,
    private router: Router,
    private loader: LoadingService,
    private snackbar: SnackbarService) {}

  ngOnInit() {
    this.router.navigate(['']);
  }

  onSubmit(query) {
    this.fetchShow(query);
  }

  fetchShow(searchQuery: string) {
    this.loader.show();
    this.apiCaller.searchShows(searchQuery).subscribe(
      data => {
        this.shows = data;
        console.log(this.shows);
      },
      (err) => {
        console.log(err);
        this.snackbar.handleError(err);
        this.loader.hide();
      },
        () => this.loader.hide(),
    );
  }
}
