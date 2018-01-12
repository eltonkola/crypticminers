import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CryptocompareService } from '../../../services/cryptocompare.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {

  chart = [];

  coin_name: string;
  coin_id: string;


  coin_details: any;
  coin_graph: any;

  constructor(private _cryptocompare: CryptocompareService, private route: ActivatedRoute,  private location: Location) {}


  ngOnInit() {

    this.route.params.subscribe( params => {
      this.coin_name = params['coin_name'];
      this.coin_id = params['coin_id'];


      this._cryptocompare.loadCoinDetails(this.coin_name, this.coin_id)
      .subscribe(
        data => {
          console.log(data);
          this.coin_details = data;
        },
        error => {
         console.log('error loading coins' + error);
        }
     );


     this._cryptocompare.loadCoinGraph(this.coin_name, this.coin_id)
     .subscribe(
       data => {
         console.log(data);
         this.coin_graph = data;
         this.loadChart();
       },
       error => {
        console.log('error loading coins' + error);
       }
    );




  });



  }


  loadChart(){

    var dataGraph = [];
    var dataLabels = [];

    this.coin_graph.Data.forEach( (row) => {
      dataLabels.push(new Date(row.time * 1000).toISOString());
      dataGraph.push(row.open);
    });

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
          labels: dataLabels,
          datasets: [{
              label: '# value',
              data: dataGraph,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });

  }



}
