import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdmissionformComponent } from './admissionform/admissionform.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  {path:"", redirectTo:"/Home",pathMatch:"full"},
  {path:"About", component: AboutComponent},
  {path:"Admission", component: AdmissionformComponent},
  {path:"Contact", component: ContactComponent},
  {path:"Home", component: HomeComponent},
  {path:"Search", component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
