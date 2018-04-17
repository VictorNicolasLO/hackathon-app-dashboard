import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password;
  email;
  errorMessage;
  constructor(private auth: AuthService,private router:Router) { }

  ngOnInit() {
  }

  login(event) {
    console.log(event)
    event.preventDefault(); // this will stop the event from further propagation and the submission will not be executed
    event.stopPropagation();
    this.auth.login(this.email, this.password, (res, err) => {
      if (!err) {
        this.router.navigateByUrl("/home")
      } else {
        this.errorMessage = err.message
      }
    })

  }

}
