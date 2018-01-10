import { Component, OnInit } from '@angular/core';
import { CompetitorService } from '../services/competitors.service';
import { Competitors } from '../shared/competitor.model';

@Component({
  selector: 'app-allscores',
  templateUrl: './allscores.component.html',
  styleUrls: ['./allscores.component.css']
})
export class AllscoresComponent implements OnInit {
  competitors: Competitors[];
  constructor(
    private _competitorService: CompetitorService,
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
  }

}
