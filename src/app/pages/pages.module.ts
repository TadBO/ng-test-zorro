import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import {pagesRouters} from './pages.routers';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pagesRouters),
    NgZorroAntdModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
