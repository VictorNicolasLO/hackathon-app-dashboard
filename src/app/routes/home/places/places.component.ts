import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { BASE_URL } from '../../../services/base.url';
import { BaseChartDirective } from 'ng2-charts';
import { translator } from '../../../shared/translator';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places
  BASE_URL = BASE_URL
  cardSelected;
  constructor(private api: ApiService) { }
  actualPlace;
  actualViewPlace;
  translator = translator
  @ViewChild("chart")
  chart: BaseChartDirective
  ngOnInit() {
    this.api.request("Places").subscribe((res: any) => {

      this.places = res.places;

      console.log(this.places);

    })
  }
  showUserCard(i) {
    this.actualPlace = this.places[i]
    this.cardSelected = i;

    document.body.scrollTop = 0;
    document.scrollingElement.scrollTo(0, 0)
    this.api.request("Places/" + i).subscribe((res: any) => {
      console.log(this.chart)

   var   exampleDataChart = []
      console.log(res.places)
      for (var i in res.place.emociones) {
        var emocion = res.place.emociones[i];
        if (!this.chart)
          this.pieChartLabels.push(translator[emocion.name])
          exampleDataChart.push(emocion.count)
      }
      this.pieChartData =exampleDataChart
      console.log(this.pieChartData)
      console.log(this.pieChartLabels)


      console.log(res.place)
      this.actualViewPlace = res.place;
      document.querySelector("mat-drawer-content").scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    })
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: string = 'pie';
}
