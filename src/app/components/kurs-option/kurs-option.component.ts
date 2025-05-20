import { AfterViewInit, Component, HostListener, ViewChild } from '@angular/core';
import ChartService from '../chart/chart.service';
import { NgxEchartsDirective, NgxEchartsModule } from 'ngx-echarts';
import { ECharts } from 'echarts';

@Component({
  standalone: true,
  selector: 'app-kurs-option',
  imports: [NgxEchartsModule],
  templateUrl: './kurs-option.component.html',
  styleUrls: ['./kurs-option.component.scss'],
})
export default class KursOptionComponent implements AfterViewInit {
  kursOption: any;
  echartsInstance: ECharts | null = null;

  @ViewChild(NgxEchartsDirective, { static: false }) chartDirective!: NgxEchartsDirective;

  constructor(private chartService: ChartService) {}

  ngAfterViewInit() {
    this.setChartOption();
  }

  @HostListener('window:resize')
  onResize() {
    this.setChartOption();
    if (this.echartsInstance) {
      this.echartsInstance.resize();
      this.echartsInstance.setOption(this.kursOption, true);
    }
  }

  onChartInit(ec: ECharts) {
    this.echartsInstance = ec;
  }

  setChartOption() {
    const isMobile = window.innerWidth < 768;
    this.kursOption = this.chartService.getKursOption(isMobile);
    if (this.echartsInstance) {
      this.echartsInstance.setOption(this.kursOption, true);
    }
  }
}
