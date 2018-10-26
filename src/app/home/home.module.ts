import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { homeRouters } from './home.routers';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouters),
    NgZorroAntdModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
