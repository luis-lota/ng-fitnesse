import { Action } from '@ngrx/store';
import { Exercise } from './exercise.model';

export const SET_AVAILABLE_TRAININGS = '[Training] SET_AVAILABLE_TRAININGS';
export const SET_FINISHED_TRAININGS = '[Auth] SET_FINISHED_TRAININGS';
export const START_TRAINING = '[Auth] START_TRAINING';
export const STOP_TRAINING = '[Auth] STOP_TRAINING';

export class SetAvailableTrainings implements Action {
  readonly type = SET_AVAILABLE_TRAININGS;
  constructor(public payload: Exercise[]) {}
}

export class SetFinished implements Action {
  readonly type = SET_FINISHED_TRAININGS;
  constructor(public payload: Exercise[]) {}
}

export class StartTraining implements Action {
  readonly type = START_TRAINING;
  constructor(public payload: Exercise) {}
}

export class StopTraining implements Action {
  readonly type = STOP_TRAINING;
}

export type TrainingActions =
  | SetAvailableTrainings
  | SetFinished
  | StartTraining
  | StopTraining;
