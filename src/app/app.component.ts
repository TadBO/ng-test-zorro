import {Component, AfterContentInit, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {EventBusService} from './service/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  public isShow: boolean;
  constructor(private router: Router, private showLoading: EventBusService) {
  }
  ngOnInit() {
    this.showLoading.showGlobalLoading.subscribe((value) => {
      this.isShow = value;
    });
    this.showLoading.showGlobalLoading.next(true);
    this.router.events.subscribe((event) => {
      if ( event instanceof  NavigationEnd || event instanceof NavigationError || event instanceof  NavigationCancel) {
        this.showLoading.showGlobalLoading.next(false);
      }
    });
  }
  ngAfterContentInit() {
  }
}

