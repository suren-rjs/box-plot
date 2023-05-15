import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Chart from 'chart.js/auto';
import { DataService } from 'src/model/data-service';
import { VehicleData } from 'src/model/VehicleData';

@Component({
  selector: 'app-box-plot',
  templateUrl: './box-plot.component.html',
  styleUrls: ['./box-plot.component.css'],
})
export class BoxPlotComponent implements OnInit {
  constructor(private vehicleDataService: DataService) {}
  @Output() triggerUpdate = new EventEmitter<any>();
  @Input()
  vehicleData: Array<VehicleData> = [];

  ngOnInit(): void {
    this.updateGraph();
  }

  updateTriggered(data: any) {
    this.updateGraph();
    this.triggerUpdate.emit('update');
  }

  async updateGraph() {
    const canvas = document.getElementById(
      'boxPlotCanvas'
    ) as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const boxPlotData = await this.vehicleDataService.getGraphData();

        const datasetColor = `rgba(0, 123, 255, 0.7)`;
        const chartDatasets = [
          {
            label: 'Box Plot Data',
            data: boxPlotData[0].datasets.flatMap((dataset) => [
              dataset.quartile1,
              dataset.median,
              dataset.quartile3,
              dataset.min,
              dataset.max,
            ]),
            backgroundColor: datasetColor,
            borderColor: datasetColor,
            borderWidth: 1,
          },
        ];

        // Destroy existing Chart instance, if any
        const existingChart = Chart.getChart(canvas);
        if (existingChart) {
          existingChart.destroy();
        }

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
