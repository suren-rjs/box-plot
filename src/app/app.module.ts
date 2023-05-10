import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownButtonComponent } from './dropdown-button/dropdown-button.component';
import { FiltersComponent } from './filters/filters.component';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { BoxPlotComponent } from './box-plot/box-plot.component';
import Chart from 'chart.js/auto';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DropdownButtonComponent,
    FiltersComponent,
    BoxPlotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, Chart],
})
export class AppModule {}
