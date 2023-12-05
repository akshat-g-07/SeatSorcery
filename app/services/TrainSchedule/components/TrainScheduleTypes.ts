export interface TrainSchedule {
  trainFullName: string;
  trainName: string;
  trainNumber: string;
  trainRunsOn: {
    friday: boolean;
    monday: boolean;
    saturday: boolean;
    sunday: boolean;
    thursday: boolean;
    tueday: boolean;
    wednesday: boolean;
  };
}
