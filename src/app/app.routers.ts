/**
 * @Author: Tuber
 * @Date: 2018/10/25
 * @Version: 1.0
 * @Last Modified by: Tuber
 * @Last Modified time: 2018/10/25
 */
import { Router } from '@angular/router';
export const appRouters = [
  {
    path: '',
    loadChildren: 'src/app/pages/pages.module#PagesModule'
  },
  {
    path: 'login',
    loadChildren: 'src/app/login/login.module#LoginModule'
  },
  {
    path: '**',
    loadChildren: 'src/app/pages/pages.module#PagesModule'
  }
];
