import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, ReplaySubject, BehaviorSubject} from 'rxjs'
import { WeatherModel } from './weather-model';
import { publishReplay, refCount } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })

export class WeatherService {
  constructor(private http: HttpClient) { }

  key: String = 'd9129b97a3a54e5fa6404fd32809d2a8';
  datoPassato = new ReplaySubject <WeatherModel>(1);
  ff581aff75ff77f02cbd5f3ec1b7de17
  urlLecce = 'https://api.weatherbit.io/v2.0/current?city=Lecce&country=It&lang=it&key=';
  urlMilano = 'https://api.weatherbit.io/v2.0/current?city=Milan&country=It&lang=it&key=';
  fusion = this.urlMilano + this.key;

  getWeather(): Observable<any[]> {
    let lecce = this.http.get( this.urlLecce + this.key)
    let milano = this.http.get(this.urlMilano + this.key)
    return forkJoin<WeatherModel[]>([lecce, milano]);
  }


  getWeatherDaily(city: string, country: string) {
      return this.http.get(`https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&lang=it&key=` + this.key).pipe(
        publishReplay(1),
        refCount()
      )
  }

  getWeatherWeekly(city: string, country: string) {
    return this.http.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${country}&lang=it&key=` + this.key)
  } 
}


  // return forkJoin([urlDaily, urlWeekly])

  //  return this.http.get(this.urlLecce).pipe(
  //     concatMap(()=> {
  //       return this.http.get(this.urlMilano)
  //     })    
  // );


      // .pipe(
      // mergeMap(weathers => this.http.get<WeatherModel[]>(`https://api.weatherbit.io/v2.0/current?city=Milano&country=It&lang=it&key=d9129b97a3a54e5fa6404fd32809d2a8`))
            //   map((data:any) => data.data.map((item: any) => new WeatherModel(
      //           item.city_name,
      //           item.temp,
      //           item.weather.description
      //     )
      //   )
      // ),
    // ).pipe(
    //   mergeMap(weathers => this.http.get<WeatherModel[]>(`https://api.weatherbit.io/v2.0/current?city=Milano&country=It&lang=it&key=d9129b97a3a54e5fa6404fd32809d2a8`))
    // )
  //  let urlMilano = this.http.get(this.fusion)
