import {Component, OnInit} from '@angular/core';
import {NzFormatEmitEvent} from 'ng-zorro-antd';

@Component({
  selector: 'app-logs-management',
  templateUrl: './logs-management.component.html',
  styleUrls: ['./logs-management.component.css']
})
export class LogsManagementComponent implements OnInit {
  public nodes: Array<object> = [
    {
      title: '前端',
      key: '00',
      expanded: true,
      children: [
        {
          title: '框架',
          key: '000',
          expanded: true,
          children: [
            {title: 'vue', key: '0000', isLeaf: true},
            {title: 'react', key: '0001', isLeaf: true},
            {title: 'angular', key: '0002', isLeaf: true}
          ]
        }, {
          title: 'ui库',
          key: '001',
          children: [
            {title: 'bootstrap', key: '0010', isLeaf: true},
            {title: 'antd', key: '0011', isLeaf: true},
            {title: 'easyui', key: '0012', isLeaf: true}
          ]
        }, {
          title: 'js',
          key: '002'
        }
      ]
    }, {
      title: '后台',
      key: '01',
      children: [
        {
          title: '语言',
          key: '010',
          children: [
            {title: 'java', key: '0100', isLeaf: true},
            {title: 'python', key: '0101', isLeaf: true},
            {title: 'node', key: '0102', isLeaf: true}
          ]
        }, {
          title: '交互方式',
          key: '011',
          children: [
            {title: 'ajax', key: '0110', isLeaf: true},
            {title: 'websocket', key: '0111', isLeaf: true}
          ]
        }
      ]
    }, {
      title: '设计',
      key: '02',
      isLeaf: true
    }
  ];

  constructor() {
  }
  public nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  ngOnInit() {
  }

}
