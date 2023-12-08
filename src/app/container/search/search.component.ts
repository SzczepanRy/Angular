import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchChanged() {}

  setSearch(inputEl: any) {
    this.searchText = inputEl.value;
    // this.searchText = event.currentTarget.value;
    this.searchChanged.emit(this.searchText);
  }
}
