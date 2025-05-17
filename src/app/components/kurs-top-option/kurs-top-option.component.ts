import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import ChartService from '../chart/chart.service';

@Component({
  standalone: true,
  selector: 'app-kurs-top-option',
  imports: [NgxEchartsModule],
  templateUrl: './kurs-top-option.component.html',
  styleUrl: './kurs-top-option.component.scss'
})
export default class KursTopOptionComponent {
kursTopOptison: any;

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.kursTopOptison = this.chartService.getKursTopOption();
  }
}
