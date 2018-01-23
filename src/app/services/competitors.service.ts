import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Competitor } from '../modals/competitors.modal';

@Injectable()
export class CompetitorService {

    private basePath = '/Competitors';
    competitors: FirebaseListObservable<Competitor[]> = null;

    constructor(
        private database: AngularFireDatabase
    ) { }
    getCompetitorsList(query={}): FirebaseListObservable<Competitor[]> {
        this.competitors = this.database.list(this.basePath, {
            query: query
        });
        console.log(this.competitors);
        return this.competitors;
    }
    private handleError(error) {
        console.log(error);
    }
}
