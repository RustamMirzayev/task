import { CommonModule, NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import VozrastComponent from '../vozrast/vozrast.component';
import ChartService from './chart.service';
import AvtivePeriotComponent from '../avtive-periot/avtive-periot.component';
import KursOptionComponent from '../kurs-option/kurs-option.component';
import KursTopOptionComponent from '../kurs-top-option/kurs-top-option.component';
import CardsComponent from '../cards/cards.component';

@Component({
  standalone: true,
  selector: 'app-chart',
  imports: [
    NgxEchartsModule,
    CommonModule,
    VozrastComponent,
    AvtivePeriotComponent,
    KursOptionComponent,
    KursTopOptionComponent,
    CardsComponent,
  ],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export default class ChartComponent {
  data1: number[] = [];
  data2: string[] = [];

  constructor(private chartService: ChartService) {}

  ngOnInit() {
    const data = this.chartService.getVozrastData();
    this.data1 = data.data1;
    this.data2 = data.data2;
    this.setChartOptions();
  }
  data = [
    {
      value: 1000,
      name: 'аёллар',
      itemStyle: {
        color: '#FA5EB6',
      },
    },
    {
      value: 1200,
      name: 'эркаклар',
      itemStyle: {
        color: '#438EEC',
      },
    },
  ];

  total = this.data.reduce((sum, item) => sum + item.value, 0);

  legendFormatter = (data: any[], total: number) => {
    return function (name: string) {
      const item = data.find((i: { name: string }) => i.name === name);
      if (item) {
        const percent = ((item.value / total) * 100).toFixed(1);
        return `${name} ${item.value} (${percent}%)`;
      }
      return name;
    };
  };
  width = window.innerWidth < 768;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth < 768;
    this.setChartOptions();
  }
  option: any;
  setChartOptions() {
    this.option = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)',
      },
      legend: {
        top: this.width ? '-2%' : '40%',
        right: window.innerWidth >= 1280 ? '10%' : '18%',
        orient: this.width ? 'horizontal' : 'vertical',
        formatter: this.legendFormatter(this.data, this.total),
        textStyle: {
          fontFamily: 'SF Pro Display',
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 14,
          letterSpacing: 0,
        },
      },
      series: [
        {
          type: 'pie',
          radius: ['60%', '70%'],
          center: ['40%', this.width ? '60%' : '40%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'center',
            formatter: `${this.total}\nУмумий сони`,
            rich: {
              value: {
                fontFamily: 'SF Pro Display',
                fontWeight: 800,
                fontSize: 16,
                lineHeight: 16,
                letterSpacing: 0,
                color: '#0f172a',
                align: 'center',
                verticalAlign: 'middle',
              },
              label: {
                fontFamily: 'SF Pro Display',
                fontWeight: 600,
                fontSize: 12,
                lineHeight: 16,
                color: '#64748b',
                align: 'center',
                verticalAlign: 'middle',
              },
            },
          },
          labelLine: {
            show: false,
          },
          data: this.data,
        },
      ],
    };
  }

  cardsData = [
    {
      title: 'Всего пользователей',
      num: '1 234 567',
    },
    {
      title: 'Всего курсов',
      num: '8',
    },
    {
      title: 'Среднее время прохождения',
      data: '12 : 05 : 46 ',
    },
    {
      title: 'Выдано сертификатов',
      data: '1 234 567',
    },
    {
      title: 'Ташкилотлар сони',
      num: '3 598',
    },
    {
      title: 'Уртача натижа',
      num: '82,6 %',
    },
  ];
}
