import { CarBrand } from './car-brand';

export interface CarModel {
  modelId: number;
  modelName: string;
  carBrand: CarBrand;
}
