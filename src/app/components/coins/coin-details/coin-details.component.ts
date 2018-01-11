import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CryptocompareService } from '../../../services/cryptocompare.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {

  chart = [];

  coin_name: string;

  constructor(private _cryptocompare: CryptocompareService, private route: ActivatedRoute,  private location: Location) {}


  ngOnInit() {

    this.route.params.subscribe( params => {
      this.coin_name = params['coin_name'];
  });


     this._cryptocompare.getCoins()
       .subscribe(res => {
         console.log(res);

/*
        let temp_max = res['Data'].map(res => res.TotalCoinSupply);
        let temp_min = res['Data'].map(res => res.SortOrder);
        let alldates = res['Data'].map(res => res)

        let weatherDates = []
        alldates.forEach((res) => {
            let jsdate = new Date(res * 1000)
            weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        })

*/
        this.chart = new Chart('canvas', {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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


       });
   }





}
