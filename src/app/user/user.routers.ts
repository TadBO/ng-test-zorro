/**
 * @Author: Tuber
 * @Date: 2018/10/25
 * @Version: 1.0
 * @Last Modified by: Tuber
 * @Last Modified time: 2018/10/25
 */
import { Router } from '@angular/router';
import {UserComponent} from './user.component';
import {CertificationManagementComponent} from './certification-management/certification-management.component';
import {BusinessManagementComponent} from './business-management/business-management.component';
import {CodeManagementComponent} from './code-management/code-management.component';
import {RightsManagementComponent} from './rights-management/rights-management.component';
import {LogsManagementComponent} from './logs-management/logs-management.component';
export const userRouters = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'certification',
        pathMatch: 'full'
      },
      {
        path: 'certification',
        component: CertificationManagementComponent
      },
      {
        path: 'business',
        component: BusinessManagementComponent
      },
      {
        path: 'code',
        component: CodeManagementComponent
      },
      {
        path: 'rights',
        component: RightsManagementComponent
      },
      {
        path: 'logs',
        component: LogsManagementComponent
      }
    ]
  }
];
