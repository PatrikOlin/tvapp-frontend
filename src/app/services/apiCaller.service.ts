import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../shared/show/show';
import { ShowDetails } from '../shared/show/show-details';


@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  private BASE_URI = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

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

  addToFavorites(userId: string, showId: string) {
    const body = {
      'user_id': userId,
      'show_id': showId
    };
    return this.http.post(this.BASE_URI + '/favorite', body);
  }
}
