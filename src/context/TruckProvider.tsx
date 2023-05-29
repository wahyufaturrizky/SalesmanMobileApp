/* eslint-disable react-hooks/rules-of-hooks */
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

import {
  ListOfTruckInterface,
} from '../interface/new-automatic-ffb-grading.interface';

import {
  FFBPredictionInterface,
} from '../interface/grading.interface';


export const TruckContext = createContext<{
  dataTruck: {
    listTruck: ListOfTruckInterface[],
    ffbPrediction?: FFBPredictionInterface,
  };
  setDataTruck: Dispatch<SetStateAction<{
    listTruck: ListOfTruckInterface[],
    ffbPrediction?: FFBPredictionInterface,
  }>>;
}>({
  dataTruck: {
    listTruck: [],
    ffbPrediction: undefined
  },
  setDataTruck: () => {},
});

export const TruckProvider = ({children}: any) => {
  const [dataTruck, setDataTruck] = useState<{
    listTruck: ListOfTruckInterface[],
    ffbPrediction?: FFBPredictionInterface,
  }>({
    listTruck: [],
    ffbPrediction: undefined
  });

  return (
    <TruckContext.Provider value={{dataTruck, setDataTruck}}>
      {children}
    </TruckContext.Provider>
  );
};
