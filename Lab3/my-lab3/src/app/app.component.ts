import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-lab3';

  firstCathetus:number = 0
  secondCathetus:number = 0
  hypotenuse:any

    calculateHypotenuse(){
      return Math.hypot(this.firstCathetus, this.secondCathetus)
    }
}
