import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  title : string = "Mi contador";
  counter : number = 0;
  base : number = 100;
  aggregate() {
    this.counter++;
  }
  aggregatent() {
    this.counter--;
  }
  aggregateBase() {
    this.counter+=this.base;
  }
  aggregatentBase() {
    this.counter-=this.base;
  }
}
