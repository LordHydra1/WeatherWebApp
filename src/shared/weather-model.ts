// export class WeatherModel {
//   constructor(
//     private rh?: number,
//     private pod?: string,
//     private lon?: number,
//     private pres?: number,
//     private timezone?: string,
//     private ob_time?: string,
//     private country_code?: string,
//     private clouds?: number,
//     private ts?: number,
//     private solar_rad?: number,
//     private state_code?: string,
//     private city_name?: string,
//     private wind_spd?: number,
//     private last_ob_time?: string,
//     private wind_cdir_full?: string,
//     private wind_cdir?: string,
//     private slp?: number,
//     private vis?: number,
//     private h_angle?: number,
//     private sunset?: string,
//     private dni?: number,
//     private dewpt?: number,
//     private snow?: number,
//     private uv?: number,
//     private precip?: number,
//     private wind_dir?: number,
//     private sunrise?: string,
//     private ghi?: number,
//     private dhi?: number,
//     private aqi?: number,
//      private lat: number,
//     private weather?: Weather,
//     private datetime?: string,
//     private temp?: number,
//     private station?: string,
//     private elev_angle?: number,
//     private app_temp?: number,
//     private city_name: string,
//     private temp: string,
//     private weather: Weather
//   ) {

//   }
// }

// interface Weather {
//   icon: string,
//   code: string,
//   description: string,
// }

export class WeatherModel {
  data: Datum[];
  count: number;
}

interface Datum {
  rh: number;
  pod: string;
  lon: number;
  pres: number;
  timezone: string;
  ob_time: string;
  country_code: string;
  clouds: number;
  ts: number;
  solar_rad: number;
  state_code: string;
  city_name: string;
  wind_spd: number;
  last_ob_time: string;
  wind_cdir_full: string;
  wind_cdir: string;
  slp: number;
  vis: number;
  h_angle: number;
  sunset: string;
  dni: number;
  dewpt: number;
  snow: number;
  uv: number;
  precip: number;
  wind_dir: number;
  sunrise: string;
  ghi: number;
  dhi: number;
  aqi: number;
  lat: number;
  weather: Weather;
  datetime: string;
  temp: number;
  station: string;
  elev_angle: number;
  app_temp: number;
}

interface Weather {
  icon: string;
  code: string;
  description: string;
}