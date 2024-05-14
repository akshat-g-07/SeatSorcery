export interface PNRDetails {
  arrival_data: {
    arrival_date: string;
    arrival_time: string;
  };
  boarding_station: string;
  chart_status: string;
  class: string;
  departure_data: {
    departure_date: string;
    departure_time: string;
  };
  passenger: {
    booking_status: string;
    current_status: string;
    name: string;
  }[];
  quota: string;
  reservation_upto: string;
  train_name: string;
  train_number: string;
}
