import { Component, OnInit, ChangeDetectorRef, OnDestroy, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { WeatherService } from 'src/shared/weather.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})

export class CardDetailsComponent implements OnInit, OnDestroy {

  // @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
  //   this.router.navigateByUrl("home").then(() => {
  //     console.log(decodeURI(this._location.path()))
  //     this.router.navigateByUrl('home')
  //   })
  //   event.returnValue = false;
  // }

  risultato: any;
  private activesub: Subscription;
  activated: boolean = false;
  takedata: any;
  show = false
  navigationSubscription;

  isFetching = false;

  constructor(private location: Location, private weatherService: WeatherService, public changeDetector: ChangeDetectorRef, private router: Router) { }


  ngOnInit() {
    this.isFetching = false;
    if(localStorage == this.risultato){
      this.isFetching = false;
      this.risultato 
      this.activated = true;
    }else{
      this.activesub = this.weatherService.datoPassato.subscribe(
        res => {
          this.changeDetector.markForCheck();
          this.risultato = res;
          this.activated = true;
          this.isFetching = true;
          localStorage.setItem('dayCall', JSON.stringify(res));
          this.weekUpdate();
        }
      )
    }
  }


  weekUpdate() {
    this.weatherService.getWeatherWeekly(this.risultato.city_name, this.risultato.country_code).subscribe
      (res => {
        this.takedata = res;
        this.show = true
        localStorage.setItem('weekCall', JSON.stringify(res));
      }
      )
  }

  ngOnDestroy() {
    this.activesub.unsubscribe();
  }

  back() {
    this.location.back()
  }
}



  // actived(index) {
  //   return this.selezionato === index
  // }

  // const pippo = Object.keys(this.data).map(key => ({
  //   type: key,
  //   value: this.data[key]
  // }))
  // console.log(pippo)

  // res => {
  //   // this.risultato = Object.keys(res).map(key => ({
  //   //   type: key,
  //   //   value: res
  //   // }))

  //   this.risultato = res
  //   this.isLoading = true
  //   console.log(this.risultato)
  // }