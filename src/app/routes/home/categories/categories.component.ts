import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  badges;
  constructor(private api: ApiService,public snackBar: MatSnackBar) { }
  showForm = false;
  formData = {};
  ngOnInit() {
    this.loadBadges()
  }

  loadBadges() {
    this.api.request("Categories").subscribe((res: any) => {
      this.badges = res.categories;
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
  saveCategorie() {
    this.api.request("Categories", this.formData).subscribe((res) => {

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
