import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FleetCar } from '../models/fleet-car';

@Injectable({
  providedIn: 'root',
})
export class FleetCarService {
  private apiUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  getAllFleetCars(): Observable<FleetCar[]> {
    return this.http.get<FleetCar[]>(this.apiUrl + 'fleet-cars');
  }
}
