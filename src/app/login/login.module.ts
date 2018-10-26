import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { loginRouters } from './login.routers';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRouters),
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
