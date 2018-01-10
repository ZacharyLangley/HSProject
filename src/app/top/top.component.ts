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
    // DEBUG
    // TODO: Make a top 10 sort function
    this.topCompetitors = this._competitorService.getCompetitors().slice(0, 10);
  }

}
