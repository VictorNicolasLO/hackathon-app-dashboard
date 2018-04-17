import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { BASE_URL } from './base.url';
import { Observable } from 'rxjs/Observable';
var api = (name) => {
  return BASE_URL + "/api/" + name;
}
@Injectable()
export class ApiService {

  BASE_URL = BASE_URL;
  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) {

  }

  request(name, data?, method?) {

    return new Observable(observer => {
      // this.http[method||"get"].

      const onResult = (res) => {
        observer.next(res)
        console.log(res)
      }
      const onError = (err) => {
        observer.error(err)
        console.log(err)
      }

      if (data) {

        this.http["post" || method](api(name), data, this.options).suscribe(onResult, onError);

      } else {
        
        this.http["get" || method](api(name), this.options).suscribe(onResult, onError);

      }
    });
  }

}
