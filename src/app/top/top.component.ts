import { Component, OnInit } from '@angular/core';
import { CompetitorService } from '../services/competitors.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Competitor } from '../modals/competitors.modal';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  public competitors: FirebaseListObservable<Competitor[]>;

  constructor(
    private competitorSvc: CompetitorService
  ) { }

  ngOnInit() {
    this.competitors = this.competitorSvc.getCompetitorsList({ });
  }

}
