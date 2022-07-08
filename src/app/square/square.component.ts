import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      <button>{{ value }}</button>
    </p>
  `,
  styles: [
  ]
})
export class SquareComponent {

  @Input() value!: "X" | "O";

}
