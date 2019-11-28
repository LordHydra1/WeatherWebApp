import { Component, OnInit} from '@angular/core';
import { WeatherService } from 'src/shared/weather.service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  

  selectedCitya;
  constructor(private weatServ: WeatherService) { }

  ngOnInit( ) {
  }


  cityname: string;
  cityFound:any= [];
  weeklyFound:any= [];
  showCard:boolean= false;
  clicked:boolean = false
  country: string;


  onSubmit(){    
    this.weatServ.getWeatherDaily(this.cityname, this.country)
    .subscribe(
      data => {
        this.cityFound = data;
        this.showCard = true;
      }
    )   
  }
  prova(){
    this.weatServ.getWeatherWeekly(this.cityname,this.country)
    .subscribe(
      data => {
        this.weeklyFound = data;
        this.clicked = true;
        console.log(data)
      }
    )
  }
}
