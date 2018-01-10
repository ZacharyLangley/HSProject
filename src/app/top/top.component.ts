import { Component, OnInit } from '@angular/core';
import { CompetitorService } from '../services/competitors.service';
import { Competitors } from '../shared/competitor.model';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  competitors: Competitors[];
  topCompetitors: Competitors[];

  constructor(
    private _competitorService: CompetitorService
  ) { }

  ngOnInit() {
    this.competitors = this._competitorService.getCompetitors();
    this.topSort();
  }

  private topSort() {
    this.competitors = this.competitors.sort((n1, n2) => {
      if (n1.score > n2.score) {
        return 1;
      }
      if (n1.score < n2.score) {
        return -1;
      }

      return 0;
    });
    this.competitors.reverse();
    this.topCompetitors = this.competitors.slice(0, 10);
  }

}
