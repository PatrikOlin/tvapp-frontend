import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../shared/interfaces/show';
import { ShowDetails } from '../shared/interfaces/show-details';


@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  private BASE_URI = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  login() {
    return this.http.get(this.BASE_URI + '/login', {responseType: 'text'});
  }

  getShow(showTitle: string): Observable<Show> {
    return this.http.get<Show>(this.BASE_URI + '/shows/' + showTitle);
  }

  searchShows(query: string) {
    const params = new HttpParams().set('searchQuery', query);
    return this.http.get<Show[]>( this.BASE_URI + '/shows/search', {params: params});
  }

  getShowDetails(showId: string) {
    const params = new HttpParams().set('show_id', showId);
    return this.http.get<ShowDetails>(this.BASE_URI + '/shows/details', {params: params});
  }

  // TODO: När detta går sönder så är det nog för att /favorite har ändrats till /watchlist i backend
  addToWatchlist(userId: number, showId: number) {
    const body = {
      'user_id': userId,
      'show_id': showId
    };
    return this.http.post(this.BASE_URI + '/watchlist', body);
  }

  removeFromWatchlist(showId: string) {
    const params = new HttpParams().set('show_id', showId);
    return this.http.delete(this.BASE_URI + '/watchlist', {params: params});
  }

  getWatchlist() {
    return this.http.get(this.BASE_URI + '/watchlist');
  }
}
