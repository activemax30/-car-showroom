import {Car} from '../../models/car';

export interface CarState {
  cars: Car[];
  totalCount: number;
  selectedCar: Car;
  newCar: Car;
}

export const initialCarState: CarState = {
  cars: null,
  totalCount: null,
  selectedCar: null,
  newCar: null,
};
