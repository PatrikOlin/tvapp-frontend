import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingState } from '../shared/interfaces/loading-state';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new Subject<LoadingState>();
  loadingState = this.loadingSubject.asObservable();

  constructor() { }

  show() {
    this.loadingSubject.next(<LoadingState> {isLoading: true});
  }

  hide() {
    this.loadingSubject.next(<LoadingState> {isLoading: false});
  }
}
