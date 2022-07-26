import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {FirstComponent} from './first/first.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  {
    path: '', //la stringa vuota rappresenta l'url localhost:4200/ (quindi la home)
    component: HomePageComponent
  },
  {
    path: 'binding',
    component: FirstComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
