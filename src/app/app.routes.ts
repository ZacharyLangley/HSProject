import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { AllscoresComponent } from './allscores/allscores.component';
import { ResourcesComponent } from './resources/resources.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'rules', component: RulesComponent },
    { path: 'allscores', component: AllscoresComponent },
    { path: 'resources', component: ResourcesComponent },
    // Keep at the Bottom
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
