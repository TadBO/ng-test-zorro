import { Component, OnInit } from '@angular/core';
import { userModel } from '../model/user.model';
import {Router} from '@angular/router';
import {NzModalService, NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  public userName: string = userModel.userName;
  constructor(private router: Router, private confirmSrv: NzModalService, private notice: NzNotificationService) { }

  ngOnInit() {
    this.notice.info('通知', `欢迎您：${this.userName}`);
  }
  public logout(): void {
    this.confirmSrv.confirm({
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
