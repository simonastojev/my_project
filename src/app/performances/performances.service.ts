import { Injectable } from '@angular/core';
import { Performance } from './performance.model';

@Injectable({
  providedIn: 'root'
})
export class PerformancesService {
  private performances: Performance[] = [
    {
      id: '1',
      name: ',,Ujka Vanja" - Anton Pavlovič Čehov',
      date: new Date('Fri May 21 2021 19:00:00'),
      place: 'Velika scena ,,Ljuba Tadić"',
      price: 1200,
      actors: 'Nenad Jezdić, Mihail Lavovič, Milica Gojković, Marija Vicković, Bogdan Diklić, Aleksandra Nikolić, Dubravko Jovanović, Branislav Lečić',
      imageUrl: 'https://www.jdp.rs/wp-content/uploads/2019/05/PLAKAT-Ujka-Vanja.jpg'
    },
    {
      id: '2',
      name: ',,Pučina" - Branislav Nušić',
      date: new Date('Tue May 11 2021 20:00:00'),
      place: 'Velika scena ,,Ljuba Tadić"',
      price: 2000,
      actors: 'Nenad Jezdić, Sloboda Mićalović, Ljubomir Bandović, Bojan Lazarov, Jovana Belović, Bogdana Obradović, Vesna Stankovič, Cvijeta Mesić, Bojan Dimitrijević, Nebojša Milovanović,Goran Šušljik, Maja Kolundžija Zoroe',
      imageUrl: 'https://www.jdp.rs/wp-content/uploads/2020/10/Pucina-Latinica.jpg'
    }
  ];
  constructor() { }

  getAllPerformances(){
    return [...this.performances];
    /*uzima sve iz niza predstava i smesta u novi niz*/
  }

  getPerformance(performanceId: string){
    return {
      ...this.performances.find(performance => performance.id === performanceId)
    };
  }

  deletePerformance(performanceId: string){
    this.performances = this.performances.filter(performance => performance.id !== performanceId);
  }
}
