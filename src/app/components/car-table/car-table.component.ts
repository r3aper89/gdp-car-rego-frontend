import { Component, OnInit } from '@angular/core';
import { FleetCarService } from '../../services/fleet-car.service';
import { FleetCar } from '../../models/fleet-car';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss'],
})
export class CarTableComponent implements OnInit {
  fleetCars: FleetCar[] = [];

  constructor(private fleetCarService: FleetCarService) {}

  ngOnInit(): void {
    this.fleetCarService.getAllFleetCars().subscribe(
      (data) => {
        this.fleetCars = data;
        console.log('CarTableComponent:', this.fleetCars);
      },
      (error) => {
        console.error('Error fetching fleet cars', error);
      }
    );
  }
  expiryWarning(expiryDate: string): string {
    const currentDate = new Date(); //current date
    const registrationExpiryDate = new Date(expiryDate); //expiry date
    const oneMonthBeforeExpiry = new Date(registrationExpiryDate);
    // - 1 month from the expiry date
    oneMonthBeforeExpiry.setMonth(registrationExpiryDate.getMonth() - 1);

    //If the expiry date is before the current date
    if (registrationExpiryDate < currentDate) {
      return 'table-danger'; //red color
      //If the expiry date is within one month from the current date
    } else if (oneMonthBeforeExpiry <= currentDate) {
      return 'table-warning'; //yellow color
    } else {
      return ''; //default color
    }
  }
  // https://getbootstrap.com/docs/5.3/content/tables/#overview
}
