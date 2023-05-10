import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-box-plot',
  templateUrl: './box-plot.component.html',
  styleUrls: ['./box-plot.component.css'],
})
export class BoxPlotComponent implements OnInit {
  ngOnInit(): void {
    const canvas = document.getElementById(
      'boxPlotCanvas'
    ) as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const boxPlotData = [
          {
            label: 'Jupiter',
            datasets: [
              {
                label: 'Price',
                min: 10,
                max: 40,
                median: 25,
                quartile1: 15,
                quartile3: 35,
              },
              {
                label: 'Odo Reading',
                min: 20,
                max: 60,
                median: 40,
                quartile1: 30,
                quartile3: 50,
              },
            ],
          },
          {
            label: 'Jupiter 1',
            datasets: [
              {
                label: 'Price',
                min: 30,
                max: 50,
                median: 40,
                quartile1: 35,
                quartile3: 45,
              },
              {
                label: 'Odo Reading',
                min: 25,
                max: 60,
                median: 45,
                quartile1: 30,
                quartile3: 50,
              },
            ],
          },
        ];

        const chartDatasets = boxPlotData.map((box) => {
          const datasetColor = `rgba(0, 123, 255, 0.7)`;
          return {
            label: box.label,
            data: box.datasets.flatMap((dataset) => [
              dataset.quartile1,
              dataset.median,
              dataset.quartile3,
              dataset.min,
              dataset.max,
            ]),
            backgroundColor: datasetColor,
            borderColor: datasetColor,
            borderWidth: 1,
          };
        });

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: boxPlotData.map((box) => box.label),
            datasets: chartDatasets,
          },
          options: {
            responsive: true,
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Value',
                },
              },
            },
          },
        });
      }
    }
  }
}
