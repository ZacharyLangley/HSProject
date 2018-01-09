import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { ResourcesComponent } from './resources/resources.component';
import { AllscoresComponent } from './allscores/allscores.component';
import { TopComponent } from './top/top.component';
import { NavComponent } from './nav/nav.component';

import { ResourceService } from './services/resources.service';
import { appRoutes } from './app.routes';
import { ResourceListComponent } from './resource-list/resource-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RulesComponent,
    ResourcesComponent,
    AllscoresComponent,
    TopComponent,
    NavComponent,
    ResourceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
