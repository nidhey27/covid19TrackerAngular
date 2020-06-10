import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { GoogleChartInterface } from 'ng2-google-charts';
import { async } from '@angular/core/testing';
import { element } from 'protractor';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  data : any
  confirmed : number;
  deaths : number
  recovered : number

  lastUpdated : Date

  dailyConfirmedData : any

  


  public doughnutChartLabels = ['Confirmed', 'Deaths', 'Recovered'];
  public doughnutChartData = [this.confirmed, this.deaths, this.recovered];
  public doughnutChartType = 'doughnut';
  constructor(private dataService : DataService) { }
 
  ngOnInit() {
    
     this.dataService.getGlobalData().subscribe(async(res) => {
       
       this.data = await res;
       this.confirmed = this.data.confirmed.value;
       this.deaths = this.data.deaths.value;
       this.recovered = this.data.recovered.value;
       this.lastUpdated = this.data.lastUpdate;
       
      //  console.log(this.lastUpdated)
       this.doughnutChartLabels = ['Confirmed', 'Deaths', 'Recovered'];
       this.doughnutChartData = [this.confirmed, this.deaths, this.recovered];

     },error => {
       console.log(error);
     })
     
     this.dataService.getDailyData().subscribe((res) => {
      console.log('Inside GET Daily')
        this.dailyConfirmedData = res
        
        
        // console.log(this.dailyDataSet)
        
     })
     
    
     
  }

  

}
