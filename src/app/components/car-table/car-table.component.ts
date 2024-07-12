import { Component, OnInit } from '@angular/core';
import { FleetCarService } from '../../services/fleet-car.service';
import { FleetCar } from '../../models/fleet-car';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss'],
})
export class CarTableComponent {
  // export class CarTableComponent implements OnInit {
  // fleetCars: FleetCar[] = [];
  // constructor(private fleetCarService: FleetCarService) {}
  // ngOnInit(): void {
  //   this.fleetCarService.getAllFleetCars().subscribe(
  //     (data) => {
  //       this.fleetCars = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching fleet cars', error);
  //     }
  //   );
  // }
}
