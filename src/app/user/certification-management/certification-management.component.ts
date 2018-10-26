import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-certification-management',
  templateUrl: './certification-management.component.html',
  styleUrls: ['./certification-management.component.css']
})
export class CertificationManagementComponent implements OnInit {
  validateForm: FormGroup;
  public dataSet: Array<object> = [
    {
      name: 'John Brown',
      phone: '18345063932',
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      phone: '13136150063',
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      phone: '15868287271',
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'John Brown',
      phone: '18345063932',
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      phone: '13136150063',
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'John Brown',
      phone: '18345063932',
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      phone: '13136150063',
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      phone: '15868287271',
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'John Brown',
      phone: '18345063932',
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      phone: '13136150063',
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'John Brown',
      phone: '18345063932',
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      phone: '13136150063',
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      phone: '15868287271',
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'John Brown',
      phone: '18345063932',
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      phone: '13136150063',
      address: 'London No. 1 Lake Park'
    }
  ];


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: '',
      state: ''
    });
  }

  public resetForm(): void {
    this.validateForm.reset();
  }

  public searchForm(): void {
    console.log(this.validateForm.value);
  }


}
