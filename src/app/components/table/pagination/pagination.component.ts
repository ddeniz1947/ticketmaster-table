import { NumberInput } from '@angular/cdk/coercion';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PageModel } from 'src/app/models/page-model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input('pageModel') pageModel: PageModel;
  @Output('pageNumber') pageNumber = new EventEmitter<Number>();
  totalPages: any;
  pageNumbersArray: any[] = [];
  pageIndex: NumberInput = 0;
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    this.totalPages = this.pageModel?.totalPages;
  }


  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.pageIndex = e.pageIndex;
    this.pageNumber.emit(e.pageIndex);
  }
}
