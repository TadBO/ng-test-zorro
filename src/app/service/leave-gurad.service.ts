import { Injectable } from '@angular/core';
import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import {CodeManagementComponent} from '../user/code-management/code-management.component';
import {Observable} from 'rxjs';
import {NzModalService} from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuradService implements CanDeactivate<CodeManagementComponent> {

  constructor(private confirmSrv: NzModalService ) { }
  canDeactivate(
    component: CodeManagementComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ):  boolean | Observable<boolean> | Promise<boolean>  {
    return Observable.create((observe) => {
      this.confirmSrv.confirm({
        nzContent: '您即将离开此页面，请确保已保存了数据',
        nzOnOk: () => {
          observe.next(true);
          observe.complete();
        },
        nzOnCancel: () => {
          observe.next(false);
          observe.complete();
        }
      });
    });
  }
}
