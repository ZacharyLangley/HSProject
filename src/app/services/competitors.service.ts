import { Injectable } from '@angular/core';
import { Competitors } from '../shared/competitor.model';
import { SAVED_COMPETITORS } from '../shared/competitors';

@Injectable()
export class CompetitorService {
    constructor() {

    }

    getCompetitors(): Competitors[] {
        return SAVED_COMPETITORS.slice(0);
    }

    getTopTen(allCompetitors: Competitors[]) {

    }
}
