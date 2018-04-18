import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showChart = false
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.request("Emociones").subscribe((res: any) => {
    

      var exampleDataChart = []
      console.log(res)
      for (var i in res.emociones) {
        var emocion = res.emociones[i];

        this.pieChartLabels.push(emocion.name)
        exampleDataChart.push(emocion.count)
      }
      this.pieChartData = exampleDataChart
      console.log(this.pieChartData)
      console.log(this.pieChartLabels)
      this.showChart = true;

      
    
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
