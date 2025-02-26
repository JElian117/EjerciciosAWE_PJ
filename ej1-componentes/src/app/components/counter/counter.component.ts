import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [NgIf],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter : number = 100;
  
  constructor(){
    //this.counter++;
    console.log("Creando el componente del contador");
    //this.incrementBy(1);
    //this.incrementBy(2);
    //this.incrementBy(3);
  }

  incrementBy(value : number = 1) : void{
    this.counter+= value;
  }
}
