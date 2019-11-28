import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/shared/weather.service';
import { WeatherModel } from 'src/shared/weather-model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //@Input() card;
  //@Input() prova;

   //constructor(private weatherService: WeatherService, private location: Location) { }

  
  // city = ''
  // apiresult: any = [];
  // APIKEY: string = 'ff581aff75ff77f02cbd5f3ec1b7de17';
 // weathers: WeatherModel[];
  // clicked: boolean = false;
  // selected: any

   ngOnInit() {
    // this.weatherService.getWeather().subscribe(
    //   (weathers: WeatherModel[]) => {
    //     this.weathers = weathers
    //     console.log(this.weathers)
    //    console.log(this.apiresult) 
    //   }
    // )
   }

  
  // actived(index) {
  //   return this.selected === index
  // }



  // openDetails(event: Event, item, index) {
  //   console.log(index)
  //   console.log(item.data)
  //   //console.log(event)
  //   // console.log('cliccato1')
  //   this.selected = (this.selected === index ? null : index)
  //   if (this.selected === index) {
  //     this.clicked = true
  //   } else {
  //     this.clicked = false
  //   }
  // }
}

