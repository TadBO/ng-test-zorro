import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-business-management',
  templateUrl: './business-management.component.html',
  styleUrls: ['./business-management.component.css']
})
export class BusinessManagementComponent implements OnInit {
  public chartOption: object = {
    backgroundColor: '#2c343c',
    title: {
      text: '访问调查',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a}<br/>{b} : {c} ({%d})'
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          {
            value: 335,
            name: '直接访问'
          },
          {
            value: 230,
            name: '邮件营销'
          },
          {
            value: 270,
            name: '联盟广告'
          },
          {
            value: 312,
            name: '视频广告'
          },
          {
            value: 198,
            name: '搜索引擎'
          }
        ].sort((a, b) => {
          return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
          normal: {
            textStyle: {
              color: 'rgba(255,255,255,.6)'
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255,255,255, .3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0,0,0,.5)'
            }
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: (idx) => {
            return Math.random() * 200;
          }
        }
      }
    ]
  };
  public lineOption: object = {
    title: {
      text: '周访问量',
      left: 'center',
      top: 20
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  };
  constructor() {
  }

  ngOnInit() {
  }


}
