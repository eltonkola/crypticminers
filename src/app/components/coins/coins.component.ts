import { Coin } from './../../model/coin';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CryptocompareService } from '../../services/cryptocompare.service';
import { Chart } from 'chart.js';
import {ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit, AfterViewInit  {

  search = '';

  /*
  Id: "4321",
  Url: "/coins/42/overview",
  ImageUrl: "/media/12318415/42.png",
  Name: "42",
  Symbol: "42",
  CoinName: "42 Coin",
  FullName: "42 Coin (42)",
  Algorithm: "Scrypt",
  ProofType: "PoW/PoS",
  FullyPremined: "0",
  TotalCoinSupply: "42",
  PreMinedValue: "N/A",
  TotalCoinsFreeFloat: "N/A",
  SortOrder: "34"
  */

  displayedColumns = ['SortOrder',
                      'Logo',
                      'Name',
                      'Algorithm',
                      'ProofType',
                      'TotalCoinSupply',
                      'Details'
                    ];
  dataSource = new MatTableDataSource<Coin>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private _cryptocompare: CryptocompareService) {}

  ngOnInit() {
      this.dataSource = new MatTableDataSource<Coin>([]);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this._cryptocompare.getCoins()
                       .subscribe(
                        data => {
                          this.dataSource = new MatTableDataSource<Coin>(data);
                          this.dataSource.paginator = this.paginator;
                          this.dataSource.sort = this.sort;
                        },
                        error => {
                         console.log('error loading coins' + error);
                        }
                     );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    this.dataSource.sort = this.sort;
  }



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


}
