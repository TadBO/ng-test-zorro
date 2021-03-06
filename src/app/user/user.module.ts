import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {RouterModule} from '@angular/router';
import {userRouters} from './user.routers';
import {ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CertificationManagementComponent} from './certification-management/certification-management.component';
import {BusinessManagementComponent} from './business-management/business-management.component';
import {CodeManagementComponent} from './code-management/code-management.component';
import {RightsManagementComponent} from './rights-management/rights-management.component';
import {LogsManagementComponent} from './logs-management/logs-management.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EditorModule } from '@tinymce/tinymce-angular';
import {LeaveGuradService} from '../service/leave-gurad.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRouters),
    NgZorroAntdModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    EditorModule
  ],
  declarations: [
    UserComponent,
    CertificationManagementComponent,
    BusinessManagementComponent,
    CodeManagementComponent,
    RightsManagementComponent,
    LogsManagementComponent
  ],
  providers: [LeaveGuradService]
})
export class UserModule {
}
