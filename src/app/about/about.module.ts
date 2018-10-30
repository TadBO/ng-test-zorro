import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { aboutRouters } from './about.routers';
import { BaseModule } from '../base/base.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRouters),
    BaseModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
