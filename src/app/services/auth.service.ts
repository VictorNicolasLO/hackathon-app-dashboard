import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {
  public storage = window.localStorage;
  constructor(private api: ApiService) { }

  login(email: String, password: String, cb) {
    this.api.request("Accounts/Admin", {
      "email": email,
      "password": password
    }).subscribe((res: any) => {
      this.setStorage("User", res.user);
      this.api.setBearer(this.getToken())
      cb(res, undefined);


    }, (err) => {
      cb(undefined, err)

    })
  }

  setStorage(key, data) {
    this.storage.setItem(key, JSON.stringify(data));
  }

  getStorage(key) {
    if (this.storage.getItem(key))
      return JSON.parse(this.storage.getItem(key));
  }

  getToken() {
    return this.getStorage("User").token;
  }

  logout() {
    /*
        this.http.post(api("log_out"), {
          "user": {
            "token": this.getStorage("User").token
          }
        });
        this.storage.removeItem("User");
    
        this.router.navigateByUrl("/login")*/

  }

  isAuthenticated() {
    if (this.getStorage("User"))
      return true;
    else
      return false
  }

  getUser() {
    return this.getStorage("User");
  }



}
