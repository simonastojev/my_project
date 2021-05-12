import { Injectable } from '@angular/core';
import { Reservation } from './reservations.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  /*
private reservations: Reservation[] = [
  {
    id: '1',
    opis: 'Narodno pozoriste',
    date: new Date("Mar 22 2021 20:00:00"),
    place: 'Rasa Plaovic',
    price: 1500
  },
  {
    id: '3',
    opis: 'Narodno pozoriste',
    date: new Date("Mar 22 2021 20:00:00"),
    place: 'Rasa Plaovic',
    price: 1500
  }
];
  constructor() { }

  getAllReservations(){
    return [...this.reservations];
  }

  getReservation(reservationId: string){
    return {
      ...this.reservations.find(performance => {
        return reservation.id === reservationId;
      })
    };
  }

  deleteReservation(performanceId: string){
    this.reservations = this.reservations.filter(reservation => {
      return reservation.id !== reservationId;
    });
  }*/
}
