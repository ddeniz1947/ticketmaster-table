import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventModel } from 'src/app/models/event-model';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-table-block',
  templateUrl: './table-block.component.html',
  styleUrls: ['./table-block.component.css']
})
export class TableBlockComponent implements OnInit {
  @Input('events') events: EventModel[];
  constructor(private router: Router, private apiCallService: ApiCallService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.events);
  }

  routeToDetail(event: EventModel) {
    this.router.navigateByUrl('/detail', { state: { detailData: event } });
    this.apiCallService.detailDataSubject.next(event);
  }
}
