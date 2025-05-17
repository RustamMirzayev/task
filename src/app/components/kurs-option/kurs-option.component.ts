import { Component } from '@angular/core';
import ChartService from '../chart/chart.service';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  standalone: true,
  selector: 'app-kurs-option',
  imports: [NgxEchartsModule],
  templateUrl: './kurs-option.component.html',
  styleUrl: './kurs-option.component.scss'
})
export default class KursOptionComponent {
kursOptison: any;

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.kursOptison = this.chartService.getKursOption();
  }
}
