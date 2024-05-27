export interface PNRDetails {
  status: boolean;
  code: number;
  message: string;
  error: string;
  data: {
    boardingInfo: {
      trainId: number;
      stationId: number;
      arrivalTime: string;
      departureTime: string;
      haltTime: string;
      stationCode: string;
      stationName: string;
      travellingDay: number;
      distance: string;
      platform: string;
    };
    destinationInfo: {
      trainId: number;
      stationId: number;
      arrivalTime: string;
      departureTime: string;
      haltTime: string;
      stationCode: string;
      stationName: string;
      travellingDay: number;
      distance: string;
      platform: string;
    };
    seatInfo: {
      coach: string;
      berth: string;
      noOfSeats: number;
    };
    trainInfo: {
      trainNo: string;
      name: string;
      boarding: string;
      destination: string;
      dt: string;
      boardingDayCount: null | number;
      fromStationName: null | string;
      toStationName: null | string;
      origin: null | string;
    };
    passengerInfo: {
      currentCoach: string;
      currentBerthNo: string;
    }[];
    trainRoutes: {
      trainId: number;
      stationId: number;
      arrivalTime: string;
      departureTime: string;
      haltTime: string;
      stationCode: string;
      stationName: string;
      travellingDay: number;
      distance: string;
      platform: string;
    }[];
  };
}
