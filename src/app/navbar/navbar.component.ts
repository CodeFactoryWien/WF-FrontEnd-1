import { Component, OnInit } from '@angular/core';
import { LoginService  } from "../shared/login.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
        
    constructor(private loginService: LoginService) {}

    // safeguard in case user didn't logout before leaving the website
    ngOnInit() {
        if (localStorage.getItem("login") == "true") {
            this.loginService.updateGreeting();
            this.loginService.switchLogButtons(1);
        }
    }

    // calls logout service
    logout(){
        this.loginService.userLogout();
    }
}
