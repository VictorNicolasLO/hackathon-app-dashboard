import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {

  constructor(private api: ApiService) { }

  login(email: String, password: String) {
    this.api.request("Accounts/Admin", {
      "email": email,
      "password": password
    }).subscribe((res) => {
      console.log(res)
    })
  }

}
