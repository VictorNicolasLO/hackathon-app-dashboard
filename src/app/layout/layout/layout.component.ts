import { Component, OnInit, ViewChild } from '@angular/core';
import { menu } from '../../routes/Menu';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  menu = menu
  constructor(private route:Router) { }
  @ViewChild("drawer")
  drawer

  ngOnInit() {
    setTimeout(()=>{
      this.drawer.toggle()
    },200)
    
  }

  goTo(url){
    this.route.navigateByUrl(url)
  }

}
