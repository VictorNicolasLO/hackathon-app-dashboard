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

  setBearer(token){
    this.headers.append("Bearer",token)
    this.options = new RequestOptions({ headers: this.headers });

  }
  removeBearer(){
    this.headers.delete("Bearer")
    this.options = new RequestOptions({ headers: this.headers });
  }

  request(name, data?, method?) {
    return new Observable(observer => {
      const onResult = (res) => {
        observer.next(JSON.parse(res._body))
      }
      const onError = (err) => {
        observer.error(JSON.parse(err._body))
      }

      if (data) {

        this.http["post" || method](api(name), data, this.options).subscribe(onResult, onError);

      } else {

        this.http["get" || method](api(name), this.options).subscribe(onResult, onError);

      }
    });
  }

}
