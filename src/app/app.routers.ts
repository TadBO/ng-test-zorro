/**
 * @Author: Tuber
 * @Date: 2018/10/25
 * @Version: 1.0
 * @Last Modified by: Tuber
 * @Last Modified time: 2018/10/25
 */
import { Router } from '@angular/router';
import {LoginGuradService} from './service/login-gurad.service';
export const appRouters = [
  {
    path: '',
    loadChildren: 'src/app/pages/pages.module#PagesModule',
    canActivate: [LoginGuradService]
  },
  {
    path: 'login',
    loadChildren: 'src/app/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'src/app/register/register.module#RegisterModule'
  },
  {
    path: '**',
    loadChildren: 'src/app/login/login.module#LoginModule'
  }
];
