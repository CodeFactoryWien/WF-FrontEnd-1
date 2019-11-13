import { Component, OnInit } from '@angular/core';
import { LoginService  } from "../shared/login.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
        
    constructor(private loginService: LoginService) {}

    ngOnInit() {
        if (localStorage.getItem("login") == "true") {
            this.loginService.updateGreeting();
            this.loginService.switchLogButtons(1);
        }
    }

    logout(){
        this.loginService.userLogout();
    }
}
