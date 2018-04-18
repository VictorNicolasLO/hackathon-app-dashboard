import { Component, OnInit } from '@angular/core';
import { BASE_URL } from '../../../services/base.url';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  places
  BASE_URL = BASE_URL
  cardSelected;
  constructor(private api:ApiService) { }
  actualPlace;
  actualViewPlace; 
  ngOnInit() {
    this.api.request("Accounts").subscribe((res:any)=>{
      console.log(res)
      this.places = res.users;

      console.log(this.places);
      
    })
  }
  showUserCard(i){
    this.actualPlace = this.places[i]
    this.cardSelected = i;
    this.api.request("Places/"+i).subscribe((res:any)=>{
      this.actualViewPlace = res.place;
    })  
  }

}
