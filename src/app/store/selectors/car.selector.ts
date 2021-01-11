import {createSelector} from '@ngrx/store';
import {CarState} from '../state/car.state';
import {AppState} from '../state/app.state';
import {RangeState} from '../state/range.state';

const selectCars = (state: AppState) => state.cars;
const selectRange = (state: AppState) => state.range;

export const selectCarList = createSelector(
  selectCars,
  (state: CarState) => state.cars
);

export const selectCarsAmount = createSelector(
  selectCars,
  (state: CarState) => state.totalCount
);

export const selectRangeFrom = createSelector(
  selectRange,
  (state: RangeState) => state.rangeFrom
);

export const selectRangeTo = createSelector(
  selectRange,
  (state: RangeState) => state.rangeTo
);

export const selectSelectedCar = createSelector(
  selectCars,
  (state: CarState) => state.selectedCar
);
