import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './app.child.html',
  styleUrls: ['./app.component.css']
})
export class AppChild {

  @Input() test:number[] = []

  // title = 'my-lab3';
  //
  // firstCathetus:number = 0
  // secondCathetus:number = 0
  // hypotenuse:any
  //
  // calculateHypotenuse(){
  //   return Math.hypot(this.firstCathetus, this.secondCathetus)
  // }
}
