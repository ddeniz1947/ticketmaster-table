import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  public detailDataSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getData(page: Number, classificationName?: String) {
    if (classificationName) {
      return this.http.get(environment.apiUrl + "?classificationName=" + classificationName + "&page=" + page + "&apikey=" + environment.apiKey);
    } else {
      return this.http.get(environment.apiUrl + "?page=" + page + "&apikey=" + environment.apiKey);
    }

  }

}
