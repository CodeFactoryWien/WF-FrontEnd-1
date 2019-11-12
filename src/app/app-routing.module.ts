import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ContactsComponent} from './contacts/contacts.component';
import {LandingComponent} from './landing/landing.component';

const routes: Routes = [
{

        path: "", component: LandingComponent

},
{

        path: "contacts", component: ContactsComponent

},
{

        path: "login", component: LoginComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
