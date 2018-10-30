import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRouters } from './app.routers';
import { AppComponent } from './app.component';
import {NZ_MODAL_CONFIG, NZ_NOTIFICATION_CONFIG, NzNotificationService} from 'ng-zorro-antd';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouters),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [NzNotificationService, { provide: NZ_NOTIFICATION_CONFIG, useValue: { nzDuration: 3000 }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
