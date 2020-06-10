import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {


  
  constructor(private dataService : DataService) { }
  data : any
  countires = []
  
 
  confirmed : number = 0;
  deaths : number = 0
  recovered : number = 0

  dataSet = []
  
  public doughnutChartLabels = ['Confirmed', 'Deaths', 'Recovered'];
  public doughnutChartData = [this.confirmed, this.deaths, this.recovered];
  public doughnutChartType = 'doughnut';
 
  update(val : string){
    this.dataService.getCountryData(val).subscribe((res) => {
      this.data       = res;
      this.confirmed  = this.data.confirmed.value
      this.deaths     = this.data.deaths.value
      this.recovered  = this.data.recovered.value
      // console.log(this.data)
      this.doughnutChartLabels = ['Confirmed', 'Deaths', 'Recovered'];
      this.doughnutChartData = [this.confirmed, this.deaths, this.recovered];
      
    })
    
  }

  
  ngOnInit() {
    this.dataService.getCountries().subscribe((res) => {
      this.data = res;
      this.countires = this.data.countries;
      
      // console.log(this.countires)
    })
    
  }
 
}
