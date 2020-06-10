import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { map, retry } from 'rxjs/operators'
import { async } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  private globalDataUrl = "https://covid19.mathdro.id/api/";
  constructor(private http : HttpClient) { }


   getGlobalData = () => {
   
    // return this.http.get(this.globalDataUrl, {responseType : 'json'}).pipe(
    //   map(res => {
    //     return  res
    //   })
    // )
    return  this.http.get(this.globalDataUrl, {responseType : 'json'}).pipe(
        map(async res => {
          return await res
        })
      )
    }

    getDailyData = () =>{
      return  this.http.get(this.globalDataUrl+'daily').pipe(
        map(res => {
          return res
        })
      )
    }

    getCountries = () => {
      return  this.http.get(this.globalDataUrl+'countries', {responseType : 'json'}).pipe(
        map(res => {
          return res
        })
      )
    }

    getCountryData = (val) => {
      console.log(this.globalDataUrl+'countries/'+val);
      return  this.http.get(this.globalDataUrl+'countries/'+val, {responseType : 'json'}).pipe(
        
        map(res => {
          return res
        })
      )
    }
  }
