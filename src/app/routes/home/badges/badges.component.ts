import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {
  badges;
  constructor(private api: ApiService,public snackBar: MatSnackBar) { }
  showForm = false;
  formData = {};
  ngOnInit() {
    this.loadBadges()
  }

  loadBadges() {
    this.api.request("Badges").subscribe((res: any) => {
      this.badges = res.badges;
    }, (err) => {
      console.log(err)

    })
  }

  openForm() {
    this.showForm = true;
  }
  closeForm() {
    this.showForm = false;
  }

  create(url) {

  }

  saveBadge() {
    this.api.request("Badges", this.formData).subscribe((res) => {

      this.snackBar.open("Saved!", "Okay!", {
        duration: 2000,
      });

    }, (err) => { 
      this.snackBar.open("Error!", "Okay!", {
        duration: 2000,
      });
    })
  }

}
