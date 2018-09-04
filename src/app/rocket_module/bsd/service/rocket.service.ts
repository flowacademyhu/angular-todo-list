import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  private API_ENDPOINT = 'https://api.spacexdata.com/v2/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getRockets(): Observable<any> {
    return this.httpClient.get<any>(this.API_ENDPOINT + 'rockets');
  }

}
