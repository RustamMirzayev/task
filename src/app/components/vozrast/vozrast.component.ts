import { Component, Input, OnInit } from '@angular/core';

import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  standalone: true,
  selector: 'app-vozrast',
  imports: [NgxEchartsDirective],
  templateUrl: './vozrast.component.html',
  styleUrl: './vozrast.component.scss',
})
export default class VozrastComponent implements OnInit {
  @Input() data1: number[] = [];
  @Input() data2: string[] = [];

  vozrastOption: any;

  ngOnInit() {
    this.vozrastOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: this.data2,
        axisLabel: {
          fontSize: 12,
          color: '#333',
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 7000,
        axisLabel: {
          fontSize: 12,
          color: '#333',
        },
      },
      series: [
        {
          data: this.data1,
          type: 'bar',
          barWidth: 16,
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
          itemStyle: {
            borderRadius: [4, 4, 4, 4],
            color: '#2563EB',
          },
          animationDuration: 1000,
        },
      ],
    };
  }
}
