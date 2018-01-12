import { Coin } from './../model/coin';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/concatAll';

@Injectable()
export class CryptocompareService {

  apiHost = 'https://min-api.cryptocompare.com';
  apiHostLegacy = 'https://cors-anywhere.herokuapp.com/' + 'https://www.cryptocompare.com/api';

/*
all coins
https://min-api.cryptocompare.com/data/all/coinlist

full details:
https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=7605

price graph:
https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=60&aggregate=3&e=CCCAGG
https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=60&aggregate=3&e=CCCAGG
https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=60&aggregate=3&e=CCCAGG


coin snapshot:
https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=BTC&tsym=USD

top pairs
https://min-api.cryptocompare.com/data/top/pairs?fsym=BTC&limit=20

price:
https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR

price historical (mund te dergosh edhe timestamp..)
https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=BTC,USD,EUR&ts=1452680400&extraParams=your_app_name

top volumes
https://min-api.cryptocompare.com/data/top/volumes?tsym=XMR


mining ecuiqmpent api:
https://www.cryptocompare.com/api/data/miningequipment/

minings contracts
https://www.cryptocompare.com/api/data/miningcontracts/


?? social stats
https://www.cryptocompare.com/api/data/socialstats/?id=1182


news:
https://min-api.cryptocompare.com/data/news/providers?extraParams=YourSite
https://min-api.cryptocompare.com/data/news/?feeds=cryptocompare,cointelegraph,coindesk&extraParams=YourSite

*/
  constructor(private _http: Http) { }

  //get the list of all coins
  getCoins() : Observable<Coin[]> {
    return this._http.get(this.apiHost + '/data/all/coinlist')
    .map((res: any) => res.json())
    .map((res: any) => this.toCoins(res))
    ;

  }

  //extract the list of coins from the response
  toCoins(coinsResponse : any ) : Coin[] {

    var elements: Coin[] = new Array();
    for (var property in coinsResponse.Data) {
      if (coinsResponse.Data.hasOwnProperty(property)) {
        elements.push(coinsResponse.Data[property]);
      }
    }
    console.log('elements: ' + elements.length);

    return elements;
  }

  //get coin details
  loadCoinDetails(coin_name : string, coin_id : string ) : Observable<Object> {
    return this._http.get(this.apiHostLegacy + '/data/coinsnapshotfullbyid/?id=' + coin_id + '&extraParams=myapp')
    .map((res: any) => res.json());
  }

  loadCoinGraph(coin_name : string, coin_id : string ) : Observable<Object> {
    return this._http.get(this.apiHost + '/data/histoday?fsym=' + coin_name + '&tsym=USD&limit=60&aggregate=3&extraParams=myapp')
    .map((res: any) => res.json());
  }


}

