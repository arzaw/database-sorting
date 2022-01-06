import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { StudentDataComponent } from './student-data/student-data.component';

const routes: Routes = [
  {path: "search", component: SearchComponent},
  { path: "data", component: StudentDataComponent},
  { path: "**", redirectTo: '/data', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
