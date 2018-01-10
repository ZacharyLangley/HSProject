import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../services/resources.service';
import { Resources } from '../shared/resource.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resources: Resources[];
  constructor(
    private _resourceService: ResourceService
  ) { }

  ngOnInit() {
    this.resources = this._resourceService.getResources();
  }
}
