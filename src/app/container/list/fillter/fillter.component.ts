import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fillter',
  templateUrl: './fillter.component.html',
  styleUrls: ['./fillter.component.css'],
})
export class FillterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;
  @Output()
  selectedRadioChanged: EventEmitter<string> = new EventEmitter<string>();
  onselectedRadioChanged() {
    console.log(this.selectedRadio);

    this.selectedRadioChanged.emit(this.selectedRadio);
  }

  selectedRadio: string = 'all';
}
