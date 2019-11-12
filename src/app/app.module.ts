import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsService } from "./shared/contacts.service";
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ArchiveComponent } from './archive/archive.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HeaderComponent,
        LoginComponent,
        ContactsComponent,
        ContactsListComponent,
        FooterComponent,
        LandingComponent,
        ArchiveComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule 
    ],
    providers: [
        ContactsService,
        { provide: 'CanAlwaysActivateGuard',
            useValue: () => {
                if(localStorage.getItem("login") == "true"){
                    return true;
                }
                return false;
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
