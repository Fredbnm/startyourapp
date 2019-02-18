import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgLoadingSpinnerService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  search: string;

  constructor() { }

  ngOnInit() {
  }



}
