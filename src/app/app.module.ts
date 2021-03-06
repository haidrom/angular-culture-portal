import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';

import { environment } from 'src/environments/environment';

import { MainComponent } from './pages/main/main.component';
import { AuthorsListComponent } from './pages/authors-list/authors-list.component';
import { AuthorFullViewComponent } from './pages/author-full-view/author-full-view.component';
import { TeamComponent } from './pages/team/team.component';
import { WorklogComponent } from './pages/worklog/worklog.component';
import { Page404Component } from './pages/page404/page404.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { appReducer } from './redux/reducers/appReducer';
import { SearchWidgetComponent } from './components/search-widget/search-widget.component';
import { AuthorOfDayComponent } from './components/author-of-day/author-of-day.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavigationComponent,
    AuthorsListComponent,
    AuthorFullViewComponent,
    TeamComponent,
    WorklogComponent,
    Page404Component,
    LanguagesComponent,
    SearchWidgetComponent,
    AuthorOfDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    StoreModule.forRoot({ appReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
