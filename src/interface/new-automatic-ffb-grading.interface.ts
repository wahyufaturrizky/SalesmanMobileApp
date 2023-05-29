export type ListOfTruckInterface = {
  truck_no?: string;
  entry_time?: Date | string;
  time?: Date | string;
};

export interface FormValuesListTruck {
  listOfTruck: ListOfTruckInterface[];
}
