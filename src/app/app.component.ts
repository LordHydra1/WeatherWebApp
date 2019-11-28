import { Component, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent  {
  title = 'weather-web';

  //   constructor(private elementRef: ElementRef){

  //   }
  //   ngAfterViewInit(){
  //     this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#4facfe';
  //  }
}
