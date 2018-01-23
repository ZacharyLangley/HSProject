import { Component, OnInit } from '@angular/core';
import { CompetitorService } from '../services/competitors.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Competitor } from '../modals/competitors.modal';

@Component({
  selector: 'app-allscores',
  templateUrl: './allscores.component.html',
  styleUrls: ['./allscores.component.css']
})
export class AllscoresComponent implements OnInit {

  public competitors: FirebaseListObservable<Competitor[]>;

  constructor(
    private competitorSvc: CompetitorService
  ) { }

  ngOnInit() {
    this.competitors = this.competitorSvc.getCompetitorsList({ 
      orderByChild: 'score',
    });  }

}
