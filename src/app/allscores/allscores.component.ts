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
  }

}
