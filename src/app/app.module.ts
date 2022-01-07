import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { AddInterviewComponent } from './add-interview/add-interview.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDataComponent,
    SearchComponent,
    DetailsComponent,
    HomeComponent,
    AddInterviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
