export interface TrainDetails {
  availableClasses: string[];
  boardingDisabled: boolean;
  distance: string;
  duration: string;
  hasPantry: boolean;
  id: number;
  returnTrainNumber: string;
  stationFrom: {
    arrivalTime: string;
    boardingDisabled: number;
    dayCount: number;
    departureTime: string;
    distance: string;
    haltTime: string;
    id: number;
    platform: string;
    speed: string;
    srNo: number;
    stationCode: string;
    stationName: string;
    updatedAt: string;
  };
  stationTo: {
    arrivalTime: string;
    boardingDisabled: number;
    dayCount: number;
    departureTime: string;
    distance: string;
    haltTime: string;
    id: number;
    platform: string;
    speed: string;
    srNo: number;
    stationCode: string;
    stationName: string;
    updatedAt: string;
  };
  trainFullName: string;
  trainName: string;
  trainNumber: string;
  trainRunsOn: {
    sunday: boolean;
    monday: boolean;
    tueday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
  };
  trainType: string;
  updatedAt: string;
}
