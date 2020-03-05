import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      app.css works!
    </p>
  `,
  styles: [`
    p{
      margin-top: 3rem;
      font-size: 20px;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
