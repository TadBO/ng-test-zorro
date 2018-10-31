import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public openMap: any = {
    sub1: true,
    sub2: false,
    sub3: false
  };
  constructor() { }

  ngOnInit() {
  }
  public openHandle(value: string): void {
    for (const key in this.openMap) {
      if ( key !== value ) {
        this.openMap[key] = false;
      }
    }
  }

}
