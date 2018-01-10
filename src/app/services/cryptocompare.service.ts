import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
//import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/concatAll';

@Injectable()
export class CryptocompareService {

  apiHost = 'https://min-api.cryptocompare.com';

  constructor(private _http: Http) { }

  getCoins() {
    return this._http.get(this.apiHost + '/data/all/coinlist')
    .map((res: any) => res.json())
    
    ;
  }

/*
getMusic(data_path): Observable<Kenga[]> {
  return this.http.get('./assets/' + data_path + '.json')
  .map((res: any) => res.json())
  //.flatMap(from)
  .concatAll()
  //.flatMap(arr => arr)
  .map(streamingUrl => this.toKenga(streamingUrl))
  .toArray();

}

toKenga(streamingUrl : string) : Kenga {
  return  new Kenga(streamingUrl);
}
*/
}
