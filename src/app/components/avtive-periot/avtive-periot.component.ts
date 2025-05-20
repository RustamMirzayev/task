import { Component, HostListener, OnInit } from '@angular/core';
import ChartService from '../chart/chart.service';
import { NgClass } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  standalone: true,
  selector: 'app-avtive-periot',
  imports: [NgClass, NgxEchartsModule],
  templateUrl: './avtive-periot.component.html',
  styleUrls: ['./avtive-periot.component.scss'],
})
export default class AvtivePeriotComponent implements OnInit {
  activePeriodOption: any;
  currentPeriod: 'months' | 'days' | 'hours' = 'hours';

  constructor(private chartDataService: ChartService) {}

  ngOnInit(): void {
    this.setChartOption(this.currentPeriod);
  }

  @HostListener('window:resize')
  onResize() {
    this.setChartOption(this.currentPeriod);
  }

  setChartOption(period: 'months' | 'days' | 'hours') {
    this.currentPeriod = period;
    const isMobile = window.innerWidth < 768;

    let data$;
    if (period === 'hours') {
      data$ = this.chartDataService.getHoursData();
    } else if (period === 'days') {
      data$ = this.chartDataService.getDaysData();
    } else {
      data$ = this.chartDataService.getMonthsData();
    }

    data$.subscribe(({ xData, yData, max }) => {
      this.activePeriodOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '15%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: xData,
          axisLabel: { fontSize: isMobile ? 10 : 12, color: '#333' },
          axisTick: { show: false },
          axisLine: { show: false },
          splitLine: { show: false },
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: max,
          axisLabel: { fontSize: isMobile ? 10 : 12, color: '#333' },
        },
        series: [
          {
            data: yData,
            type: 'bar',
            barWidth: isMobile ? 8 : 16,
            barGap: isMobile ? '40%' : '10%',
            showBackground: true,
            backgroundStyle: { color: 'rgba(180, 180, 180, 0.2)' },
            itemStyle: { borderRadius: [4, 4, 4, 4], color: '#0EA5E9' },
            animationDuration: 1000,
          },
        ],
      };
    });
  }
}
