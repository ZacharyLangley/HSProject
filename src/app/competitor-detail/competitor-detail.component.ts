import { Component, OnInit, Input } from '@angular/core';
import { Competitor } from '../modals/competitors.modal';
import { CompetitorService } from '../services/competitors.service';

@Component({
  selector: 'app-competitor-detail',
  templateUrl: './competitor-detail.component.html',
  styleUrls: ['./competitor-detail.component.css']
})
export class CompetitorDetailComponent implements OnInit {

  @Input() competitor: Competitor;

  constructor(
    private competitorSvc: CompetitorService
  ) { }

  ngOnInit() {
  }

}
