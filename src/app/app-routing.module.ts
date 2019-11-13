import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ContactsComponent} from './contacts/contacts.component';
import {LandingComponent} from './landing/landing.component';
import {ArchiveComponent} from './archive/archive.component';

const routes: Routes = [
{
	path: "", 
    component: LandingComponent
},
{
	path: "contacts", 
	component: ContactsComponent,
	canActivate: ['CanAlwaysActivateGuard']
},
{
	path: "archive", 
    component: ArchiveComponent,
    canActivate: ['CanAlwaysActivateGuard']
},
{
	path: "login", 
	component: LoginComponent,
	canActivate: ['CanNeverActivateGuard']
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
