import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { CountService } from './services/count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  multi = [];

  view: [number, number] = [510, 220];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  showGridLines = false;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';
  

/*   colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  }; */

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#ec755d', '#76b5bc', '#ec755d', '#ec755d'],
  };

  
/*   export var multi = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },
  
    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        }
      ]
    }
  ]; */
  

  get single(){
    return this.countService.pagosData;
  } 
  
  pagosDatas: Number;
  constructor( private countService: CountService) {
    //Object.assign(this, { single.value })
    const totalResultados = this.countService.pagosData.map(item => item.value).reduce((prev:any, curr:any) => prev + curr, 0);
    this.pagosDatas = totalResultados;
    console.log(totalResultados);
   
  }
  
  onSelect(event: any) {
    console.log(event);
  }
}
