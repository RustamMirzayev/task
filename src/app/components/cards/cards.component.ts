import { Component, Input, OnInit } from '@angular/core';
import ChartService from '../chart/chart.service';

@Component({
  standalone: true,
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export default class CardsComponent implements OnInit {
  @Input() card: any;
cardsData: any[] = [];

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.cardsData = this.chartService.getCardsData();
  }
}
