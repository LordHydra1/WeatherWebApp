import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CardDetailsComponent } from '../card-details/card-details.component';



const homeRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'details/:', component: CardDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }