import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BaseRequestOptions, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class PredictionsService {

  private _predictions: any[] = [];

  get predictions(): any[] {
    return this._predictions;
  }

  constructor(private http: Http) {
    this.http.get('http://localhost:3002/data')
      .subscribe((res) => {
        this._predictions = res.json().predictions;
      });
  }

  public createPrediction(prediction: any) {
    this._predictions.push({...prediction});
    this.syncPredictions();
  }

  private syncPredictions() {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post('http://localhost:3002/data', {predictions: this.predictions}, options)
      .subscribe();
    debugger;
  }
}