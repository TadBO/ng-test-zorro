import { Component, OnInit } from '@angular/core';
import { userModel } from '../model/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  public userName: string = userModel.userName;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  public logout(): void {
    userModel.isLogin = false;
    userModel.userName = '';
    userModel.password = '';
    this.router.navigateByUrl('/login');
  }

}
