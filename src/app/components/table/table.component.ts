import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';
import { PageModel } from '../../models/page-model';
import { EventModel } from 'src/app/models/event-model';
import { PaginationComponent } from './pagination/pagination.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(PaginationComponent) paginationComponent: any;
  pageModel: PageModel;
  events: EventModel[];
  lastPageNumber: Number = 0;
  selectorPageNumber: Number = 0;
  lastSearchKey: String = "";

  constructor(private apiCall: ApiCallService) { }

  ngOnInit(): void {
    this.getData(0);
  }

  getPageNumber(event: Number) {
    this.getData(event);
  }

  getSearchKey(event: String) {
    this.lastSearchKey = event;
    this.apiCall.getData(0, this.lastSearchKey).subscribe((data: any) => {
      this.events = data?._embedded?.events;
      this.pageModel = data?.page;
      this.paginationComponent.pageIndex = 0;
    })
  }

  getData(pageNumber: Number) {
    if (this.lastSearchKey !== "") {
      this.apiCall.getData(pageNumber, this.lastSearchKey).subscribe((data: any) => {
        this.events = data?._embedded?.events;
        this.pageModel = data?.page;
      })
    } else {
      this.apiCall.getData(pageNumber).subscribe((data: any) => {
        this.events = data?._embedded?.events;
        this.pageModel = data?.page;
      })
    }
  }

}
