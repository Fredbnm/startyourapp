import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgLoadingSpinnerService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnDestroy {
  public show: boolean;
  /**
   * Component constructor with injected dependencies.
   * @param progress
   */
  public constructor(
    private progress: NgLoadingSpinnerService
  ) {
    this.progress.state.subscribe(
      (response: boolean) => {
        this.show = response;
      }
    );
  }
  public ngOnDestroy() {
    this.progress.state.unsubscribe();
  }



}
