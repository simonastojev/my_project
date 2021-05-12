import { Component, OnInit } from '@angular/core';
import { Performance } from '../performance.model';
import { PerformancesService } from '../performances.service';

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.page.html',
  styleUrls: ['./repertoire.page.scss'],
})
export class RepertoirePage implements OnInit {

  performances: Performance[];
  constructor(private PerformancesService: PerformancesService) { }

  ngOnInit() {
    this.performances = this.PerformancesService.getAllPerformances();
  }

}
