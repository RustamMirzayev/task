import { AfterViewInit, Component, HostListener, ViewChild } from '@angular/core';
import { NgxEchartsDirective, NgxEchartsModule } from 'ngx-echarts';
import ChartService from '../chart/chart.service';
import { ECharts } from 'echarts';

@Component({
  standalone: true,
  selector: 'app-kurs-top-option',
  imports: [NgxEchartsModule],
  templateUrl: './kurs-top-option.component.html',
  styleUrl: './kurs-top-option.component.scss'
})
export default class KursTopOptionComponent  implements AfterViewInit {
 kursTopOptison: any;
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
      this.echartsInstance.setOption(this.kursTopOptison, true);
    }
  }

  onChartInit(ec: ECharts) {
    this.echartsInstance = ec;
  }

  setChartOption() {
    const isMobile = window.innerWidth < 768;
    this.kursTopOptison = this.chartService.getKursTopOption(isMobile);
    if (this.echartsInstance) {
      this.echartsInstance.setOption(this.kursTopOptison, true);
    }
  }
}
