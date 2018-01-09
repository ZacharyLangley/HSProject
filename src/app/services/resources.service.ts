import { Injectable } from '@angular/core';
import { Resources } from '../shared/resource.model';
import { SAVED_RESOURCES } from '../shared/resources';

@Injectable()
export class ResourceService {

  constructor() { }

  getResources(): Resources[]{
    return SAVED_RESOURCES.slice(0);
  }

  getTotalResources(allActivities: Resources[]){
    return allActivities.length;
  }
}
