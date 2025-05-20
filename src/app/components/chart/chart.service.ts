import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class ChartService {
  //  Active Period
  getVozrastData() {
    return {
      data1: [2000, 3000, 4900, 2500],
      data2: ['0-16', '16-30', '30-50', '50+'],
    };
  }

  getHoursData(): Observable<{
    xData: string[];
    yData: number[];
    max: number;
  }> {
    return of({
      xData: Array.from(
        { length: 24 },
        (_, i) => `${i.toString().padStart(2, '0')}:00`
      ),
      yData: [
        120, 200, 150, 80, 70, 110, 130, 110, 230, 300, 310, 210, 220, 250, 300,
        340, 330, 350, 320, 170, 171, 190, 200, 220,
      ],
      max: 400,
    });
  }

  getDaysData(): Observable<{ xData: string[]; yData: number[]; max: number }> {
    return of({
      xData: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
      yData: Array.from({ length: 30 }, () => Math.floor(Math.random() * 2000)),
      max: 2000,
    });
  }

  getMonthsData(): Observable<{
    xData: string[];
    yData: number[];
    max: number;
  }> {
    return of({
      xData: [
        'Yanvar',
        'Fevral',
        'Mart',
        'Aprel',
        'May',
        'Iyun',
        'Iyul',
        'Avgust',
        'Sentabr',
        'Oktabr',
        'Noyabr',
        'Dekabr',
      ],
      yData: [
        5000, 4800, 5200, 6100, 7200, 6800, 7500, 7000, 6600, 6300, 5900, 6200,
      ],
      max: 8000,
    });
  }

  // Kurs statistikasi
  getKursOption(isMobile: boolean) {
    return {
      tooltip: { show: false },
      legend: { show: false },
      grid: {
        left: isMobile ? '-15%' : '3%',
        right: isMobile ? '5%' : '5%',
        bottom: '5%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        max: 100,
        boundaryGap: [0, 0.01],
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
      },
      yAxis: {
        type: 'category',
        data: [
          "IJTIMOIY MEDIA MARKETING o'quv qo'llanma",
          "SMM - Social Media Marketing video-o'quv kursi",
          'WEB DESIGN',
          'ELEKTRON TIJORAT',
          'INGLIZ TILI',
        ],
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          show: true,
          fontSize: isMobile ? 10 : 13,
          lineHeight: isMobile ? 30 : 9,
          formatter: (value: string) => {
            if (isMobile) {
              return value.length > 20 ? value.slice(0, 17) + '...' : value;
            } else {
              const words = value.split(' ');
              if (words.length <= 3) return value;
              return (
                words.slice(0, 3).join(' ') + '\n' + words.slice(3).join(' ')
              );
            }
          },
          overflow: 'truncate',
          verticalAlign: isMobile ? 'bottom' : 'center',
          align: isMobile ? 'top' : 'right',
          padding: [0, 0, 0, 10],
        },
      },
      series: [
        {
          name: 'Foiz',
          type: 'bar',
          barWidth: '50%',
          itemStyle: {
            color: '#DCBA8D',
            borderRadius: [4, 4, 4, 4],
          },
          label: {
            show: true,
            position: 'insideRight',
            formatter: (params: any) => `${params.value} %`,
            fontSize: isMobile ? 10 : 12,
            color: '#fff',
          },
          data: [20.3, 62.6, 79.1, 86.7, 95.6],
        },
      ],
    };
  }

  getKursTopOption(isMobile: boolean) {
    return {
      tooltip: { show: false },
      legend: { show: false },
      grid: {
        left: isMobile ? '-15%' : '3%',
        right: isMobile ? '5%' : '5%',
        bottom: '5%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        max: 13000,
        boundaryGap: [0, 0.01],
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
      },
      yAxis: {
        type: 'category',
        data: [
          "IJTIMOIY MEDIA MARKETING o'quv qo'llanma",
          "SMM - Social Media Marketing video-o'quv kursi",
          'WEB DESIGN',
          'ELEKTRON TIJORAT',
          'INGLIZ TILI',
        ],
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          show: true,
          fontSize: isMobile ? 10 : 13,
          lineHeight: isMobile ? 30 : 9,
          formatter: (value: string) => {
            if (isMobile) {
                return value.length > 20 ? value.slice(0, 17) + '...' : value;
            } else {
              const words = value.split(' ');
              if (words.length <= 3) return value;
              return (
                words.slice(0, 3).join(' ') + '\n' + words.slice(3).join(' ')
              );
            }
          },
          overflow: 'truncate',
          verticalAlign: isMobile ? 'bottom' : 'center',
          align: isMobile ? 'top' : 'right',
          padding: [0, 0, 0, 10],
        },
      },
      series: [
        {
          name: 'Kurslar',
          type: 'bar',
          barWidth: '50%',
          itemStyle: {
            color: '#244192',
            borderRadius: [4, 4, 4, 4],
          },
          label: {
            show: true,
            position: 'insideRight',
            formatter: (params: any) => `${params.value}`,
            fontSize: isMobile ? 10 : 12,
            color: '#fff',
          },
          data: [3546, 3546, 7981, 9568, 12356],
        },
      ],
    };
  }

  // Cards

  getCardsData() {
    return [
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
}
