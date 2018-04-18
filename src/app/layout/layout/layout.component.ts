import { Component, OnInit, ViewChild } from '@angular/core';
import { menu } from '../../routes/Menu';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { AuthModule } from '../../routes/auth/auth.module';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  menu = menu
  actualRoute;
  actualName;
  constructor(private route:Router,private auth:AuthService,ar:ActivatedRoute) {
    this.route.events.subscribe((event)=>{
      if(event instanceof NavigationEnd) {
        console.log(event)
        this.actualRoute = event.urlAfterRedirects
        this.actualName = this.nameByUrl(this.actualRoute)
      }
  
    })
   }
  @ViewChild("drawer")
  drawer

  ngOnInit() {
    setTimeout(()=>{
      this.drawer.toggle()
    },200)
    
  }

  nameByUrl(url){
    for(var i in menu){
      if(menu[i].url == this.actualRoute){
        return menu[i].name;
      }
    }
  } 

  logout(){
    this.auth.logout();
    this.route.navigateByUrl("/auth")
  }
  goTo(url){
    this.route.navigateByUrl(url)
  }

}
