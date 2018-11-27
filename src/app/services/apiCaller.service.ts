import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../shared/show/show';
import { ShowDetails } from '../shared/show/show-details';


@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  constructor(private http: HttpClient) { }

  getShow(showTitle: string): Observable<Show> {
    return this.http.get<Show>('http://localhost:8080/api/shows/' + showTitle);
  }

  searchShows(query: string) {
    const params = new HttpParams().set('searchQuery', query);
    return this.http.get<Show[]>('http://localhost:8080/api/shows/search', {params: params});
  }

  getShowDetails(showId: string) {
    const params = new HttpParams().set('show_id', showId);
    return this.http.get<ShowDetails>('http://localhost:8080/api/shows/details', {params: params});
  }
}
