import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../../../services/apiCaller.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Show } from '../../interfaces/show';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { LoginComponent } from '../login/login.component';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

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
    private loader: LoadingService) {}

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
        this.shows = <any>data;
        console.log(this.shows);
      },
      err => console.log(err),
      () => this.loader.hide(),
    );
  }
}
