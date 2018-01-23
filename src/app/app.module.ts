import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { ResourcesComponent } from './resources/resources.component';
import { AllscoresComponent } from './allscores/allscores.component';
import { TopComponent } from './top/top.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

import { CompetitorService } from './services/competitors.service';
import { ResourceService } from './services/resources.service';
import { appRoutes } from './app.routes';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { CompetitorDetailComponent } from './competitor-detail/competitor-detail.component';
import { environment } from '../environments/environment';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RulesComponent,
    ResourcesComponent,
    AllscoresComponent,
    TopComponent,
    NavComponent,
    ResourceListComponent,
    FooterComponent,
    CompetitorDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [ResourceService, CompetitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
