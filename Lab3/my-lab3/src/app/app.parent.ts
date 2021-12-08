import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './app.parent.html',
  styleUrls: ['./app.component.css']
})
export class AppParent {

  first: number = 0
  second: number = 0
  third: number = 0
  root_first: number = 0
  root_second: number = 0
  is_variables_not_zero: boolean = false


  count() {
    let discrimenant: number;

    discrimenant = Math.pow(this.second, 2) - 4 * this.first * this.third

    if (discrimenant > 0) {
      discrimenant = Math.sqrt(discrimenant)
      console.log(discrimenant)
      this.root_first = (-this.second - discrimenant) / (2 * this.first)
      this.root_second = (-this.second + discrimenant) / (2 * this.first)
      console.log(this.root_first)
      console.log(this.root_second)
    } else {
      console.log("Дискриминант меньше 0")
    }
  }


  CheckVariable() {
    if (Math.abs(this.first) + Math.abs(this.second) + Math.abs(this.third) > 0) {
      this.is_variables_not_zero = true
    }
  }
}
