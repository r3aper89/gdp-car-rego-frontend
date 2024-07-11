import { CarModel } from './car-model';

export interface FleetCar {
  fleetCarId: number;
  numberPlate: string;
  expiryDate: string;
  carModel: CarModel;
  driverName: string;
  fleetActive: boolean;
}
