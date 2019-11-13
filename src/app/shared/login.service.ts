import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})

export class LoginService {

	constructor(private router: Router) { }

    // logs the user in, calls functions to update navbar and redirects user to contacts page
	userLogin(user){
    	localStorage.setItem("login", "true"); 
        localStorage.setItem("user", user.key);
        this.switchLogButtons();
        this.router.navigate(['contacts']);
        this.updateGreeting();
    }

    // logs the user out, calls functions to update navbar and redirects user to landing page
    userLogout(){
    	localStorage.removeItem("login");
    	localStorage.removeItem("user");
    	this.updateGreeting();
    	this.switchLogButtons();
    	this.router.navigate(['']);
    }

    // changes greeting based on login status / username
    updateGreeting(){
        let username = localStorage.getItem("user");
        if(username != null){
            $("#greeting").html(username);
        }
        $("#containerGreet").toggleClass("d-none");
    }

    // swaps login/logout links based on authentication state
    switchLogButtons(){
        $("#in").toggleClass("d-none");
        $("#out").toggleClass("d-none");
    }
}
