import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  searchValue: String = "";

  @Output("searchKey") searchKey = new EventEmitter<String>();

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  searchInput(value: String) {
    this.searchValue = value;
  }

  emitSearchValue() {
    if (this.searchValue !== undefined && this.searchValue !== null && this.searchValue !== "") {
      this.searchKey.emit(this.searchValue);
    } else {
      this.openSnackBar("Please Fill Search Box");
    }

  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "", {
      duration: 2000,
    });
  }
}
