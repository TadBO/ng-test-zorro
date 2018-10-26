import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { aboutRouters } from './about.routers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRouters)
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
