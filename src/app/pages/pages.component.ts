import { Component, OnInit } from '@angular/core';
import { userModel } from '../model/user.model';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  providers: [NzModalService]
})
export class PagesComponent implements OnInit {
  public userName: string = userModel.userName;
  constructor(private router: Router, private nzModle: NzModalService) { }

  ngOnInit() {
  }
  public logout(): void {
    this.nzModle.confirm({
      nzTitle: '退出提示',
      nzContent: '您即将退出，是否退出',
      nzOnOk: () => {
        userModel.isLogin = false;
        userModel.userName = '';
        userModel.password = '';
        this.router.navigateByUrl('/login');
      }
    });
  }

}
