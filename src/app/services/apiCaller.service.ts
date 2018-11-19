import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Show } from '../shared/show/show';
import {map } from 'rxjs/operators';
import { Observable } from 'rxjs';


const username = 'enmejl@gmail.com';
const password = 'blajblaj';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa(username + ':' + password)
  })
};


@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  constructor(private http: HttpClient) { }

  getShows() {
      return this.http.get('http://localhost:8080/api/shows/', httpOptions);
  }

  searchShows(query: string) {
    const body = {'searchQuery': query};
    return this.http.post('http://localhost:8080/api/shows/search', body, httpOptions)  }
}
