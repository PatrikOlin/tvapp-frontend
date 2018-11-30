import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { LoadingState } from '../../interfaces/loading-state';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit, OnDestroy {

  loading = false;

  private subscription: Subscription;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.subscription = this.loadingService.loadingState
      .subscribe((state: LoadingState) => {
        this.loading = state.isLoading;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
