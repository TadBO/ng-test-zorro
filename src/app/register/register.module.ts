import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import {registerRouter} from './register.routers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(registerRouter)
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
