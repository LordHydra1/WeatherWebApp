import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/shared/weather.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private weatServ: WeatherService) { }

  cityname: string;
  cityFound: any = [];
  weeklyFound: any = [];
  showCard: boolean = false;
  clicked: boolean = false
  country: string;
  fetchCountries: any = [];
  resSearch: any;
  isFound = false;
  toggle=true

  ngOnInit() {
    this.weatServ.getCountries().subscribe(
      res => {
        this.fetchCountries = res
        console.log(this.fetchCountries)
      }
    )
  }

  onSubmit(F) {
    if(F){
      this.weatServ.getWeatherDaily(this.cityname, this.country)
      .subscribe(
        data => {
          this.cityFound = data;
          this.showCard = true;
          this.toggle = false
        }
      )
    }
  
  }

  getWeek() {
    this.weatServ.getWeatherWeekly(this.cityname, this.country)
      .subscribe(
        data => {
          this.weeklyFound = data;
          this.clicked = true;
        }
      )
  }


  calculateTotal(e) {
    const index = this.fetchCountries.map(el => el.alpha2Code.toLowerCase()).indexOf(e.toLowerCase());
    if (index > -1) {
      this.resSearch = this.fetchCountries[index];
      this.isFound = true;
      console.log(this.resSearch)
    }

//   for (let key in this.fetchCountries){

//  if(this.fetchCountries[key].alpha2Code.toLowerCase() === e){
//    return console.log('TROVATO',e),
//    console.log(this.fetchCountries[key])
//  }
// }

    // this.fetchCountries.alpha2Code
    // console.log(this.fetchCountries.alpha2Code)
  }
}
