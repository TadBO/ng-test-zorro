import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public array: Array<object> = [
    {
      src: 'https://images.pexels.com/photos/412537/pexels-photo-412537.jpeg?auto=compress&cs=tinysrgb&w=900'
    },
    {
      src: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=900'
    },
    {
      src: 'https://images.pexels.com/photos/1320998/pexels-photo-1320998.jpeg?auto=compress&cs=tinysrgb&w=900'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
