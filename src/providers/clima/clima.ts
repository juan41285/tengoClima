import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ClimaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClimaProvider {

  constructor(public http: HttpClient) {}

  getClimaData(lat, long){

   return this.http.get('https://api.darksky.net/forecast/2fa7b5e3579980e70eb137da56e48af9/' + lat + ',' + long + '?units=si&lang=es');

  }

}
