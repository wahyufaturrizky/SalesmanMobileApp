import {CriteriaInterface} from './common.interface';

export interface FFBPredictionInterface {
  ffb_id: string;
  ffb_no: number;
  truck_id: number;
  time: Date | string;
}

export type FormCriteriaType = {
  ffb_id: string;
  ffb_no: number;
  truck_id: number;
  time: Date | string;
  grading_result: {
    criteria: CriteriaInterface | string;
    optionMatang: string[];
  };
};

export interface FormCriteriaInterface extends FFBPredictionInterface {
  grading_result: {
    criteria: CriteriaInterface | string;
    optionMatang: string[];
  };
}
