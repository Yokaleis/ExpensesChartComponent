import { Injectable } from '@angular/core';


interface pagos {name: string, value: number}

@Injectable({
  providedIn: 'root'
})
export class CountService {

  private data: pagos [] = [
    {
      name: "mon",
      "value": 17.55,
    },
    {
      "name": "tue",
      "value": 65,
    },
    {
      "name": "wed",
      "value": 50,
    },
    {
      "name": "thu",
      "value": 32,
    },
    {
      "name": "fri",
      "value": 22,
    },
    {
      "name": "sat",
      "value": 43,
    }
  ];

  get pagosData(){
    return this.data;
  } 
  
}
