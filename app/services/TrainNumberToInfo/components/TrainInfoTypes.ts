export interface TrainInfoSuccess {
  arrivalTime: string;
  availableClasses: string[];
  avgSpeed: number;
  departureTime: string;
  distance: number;
  duration: string;
  hasPantry: boolean;
  id: number;
  numberOfStops: number;
  returnTrainNumber: string;
  stationFrom: {
    id: number;
    stationCode: string;
    stationName: string;
  };
  stationTo: {
    id: number;
    stationCode: string;
    stationName: string;
  };
  trainFullName: string;
  trainName: string;
  trainNumber: string;
  trainRunsOn: {
    sunday: boolean;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
  };
  trainTypeCode: string;
  updatedAt: string;
}
