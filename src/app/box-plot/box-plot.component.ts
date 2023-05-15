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
  isPriceValue: Boolean = true;
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

  togglePlot(value: string) {
    console.log(`Updated Plot : ${value}`);

    this.isPriceValue = value == 'price';
    this.updateGraph();
  }

  async updateGraph() {
    const canvas = document.getElementById(
      'boxPlotCanvas'
    ) as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const boxPlotData = await this.vehicleDataService.getGraphData(
          this.isPriceValue ? 'price' : 'odoReading'
        );

        const datasetColor = `rgba(0, 123, 255, 0.7)`;
        const data: number[] = [];

        boxPlotData.forEach((plot) => data.push(plot.datasets[0].max));
        const chartDatasets = [
          {
            label: boxPlotData[0].datasets[0].label,
            data: data,
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
