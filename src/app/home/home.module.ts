import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { homeRouters } from './home.routers';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BaseModule } from '../base/base.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouters),
    NgZorroAntdModule,
    BaseModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
