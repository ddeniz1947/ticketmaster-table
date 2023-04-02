import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { EventModel } from 'src/app/models/event-model';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detailData: EventModel;
  constructor(private router: Router) {
    if (this.router.getCurrentNavigation()?.extras?.state?.detailData) {
      this.detailData = this.router.getCurrentNavigation()?.extras?.state['detailData'];
    } else {
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit(): void {
  }

}
