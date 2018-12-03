import { Episode } from 'src/app/shared/interfaces/episode';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../interfaces/show';
import { ShowDetails } from '../interfaces/show-details';
import { Season } from '../interfaces/season';


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

  getSeasonDetails(showId: number, season: number) {
    const params = new HttpParams()
      .set('show_id', showId.toString())
      .set('season', season.toString());

    return this.http.get<Season>(this.BASE_URI + '/shows/details/season', {params: params});
  }

  getEpisodeDetails(showId: number, season: number, episode: number) {
    const params = new HttpParams()
      .set('show_id', showId.toString())
      .set('season', season.toString())
      .set('episode', episode.toString());

      return this.http.get<Episode>(this.BASE_URI + '/shows/details/episode', {params: params});
  }

  registerUser(email: string, password: string) {
    const headers = new HttpHeaders({
        'email': email,
        'password': password
      });

    const httpOptions = { headers: headers, responseType: 'text' as 'text' };
    return this.http.post(this.BASE_URI + '/login/create', null, httpOptions);
  }
}
