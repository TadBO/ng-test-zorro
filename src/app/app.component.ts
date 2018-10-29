import {Component, AfterContentInit, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  private isShow: boolean = true;
  constructor() {
  }
  ngOnInit() {
  }
  ngAfterContentInit() {
    this.isShow = false;
  }
}

