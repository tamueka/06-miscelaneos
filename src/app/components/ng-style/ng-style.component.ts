import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  <p [ngStyle]="{'font-size': tamano + 'px'}">
    Hola mundo es una etiqueta html
  </p>

  <p [style.fontSize.px]="tamano">
    Hola mundo
  </p>

  <button class="btn btn-primary" (click)="tamano = tamano + 5">
    <i class="fa fa-plus"></i>
  </button>

  <button class class="btn btn-primary" (click)="tamano = tamano - 5">
    <i class="fa fa-minus"></i>
  </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano: number = 25;

  constructor() { }

  ngOnInit(): void {
  }

}
