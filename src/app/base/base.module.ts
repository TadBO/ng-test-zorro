import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdGithubComponent } from './ad-github/ad-github.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [AdGithubComponent],
  exports: [AdGithubComponent]
})
export class BaseModule { }
