import { Component, OnInit, ViewChild, AfterViewInit, } from '@angular/core';
import { WeatherService } from 'src/shared/weather.service';
import { WeatherModel } from 'src/shared/weather-model'
import { Router } from '@angular/router';
import { CardDetailsComponent } from '../card-details/card-details.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // @ViewChild(CardDetailsComponent, { static: false }) DetailsChild: CardDetailsComponent;

  constructor(private weatherService: WeatherService, private router: Router) { }
  city = ''
  apiresult: any = [];
  APIKEY: string = 'ff581aff75ff77f02cbd5f3ec1b7de17';
  weathers: WeatherModel[];
  clicked: boolean = false;
  selected: any
  selectedItem:any = [];
  ngOnInit() {
    this.weatherService.getWeather().subscribe(
      (weathers: WeatherModel[]) => {
        this.weathers = weathers
      }
    )
  }
  // ngAfterViewInit() {

  //   this.selectedItem = this.DetailsChild

  // }
  // actived(index) {
  //   return this.selected === index
  // }



  openDetails(item, index) {

    
    this.selectedItem = item;
    
    this.router.navigate([`details/${item.data[0].city_name}`]) 

    this.weatherService.datoPassato.next(item.data[0])

    // console.log(this.selectedItem)
    // console.log(index)
    // console.log(item.data)
    // console.log(event)
    // console.log('cliccato1')

    // this.selected = (this.selected === index ? null : index)
    // if (this.selected === index) {
    //   this.clicked = true
      
    //  // console.log(this.router)
    // } else {
    //   this.clicked = false
    // }
  }
}
