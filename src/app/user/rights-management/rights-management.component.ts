import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-rights-management',
  templateUrl: './rights-management.component.html',
  styleUrls: ['./rights-management.component.css']
})
export class RightsManagementComponent implements OnInit {

  constructor(private msg: NzMessageService) { }

  ngOnInit() {
  }
  public handleChange({ file, fileList }): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

}
