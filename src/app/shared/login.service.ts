import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

enum loginState {
	login = 1,
	logout,
}

@Injectable({
	providedIn: 'root'
})

export class LoginService {

	constructor(private router: Router) { }

    // logs the user in, calls functions to update navbar and redirects user to contacts page
	userLogin(user){
    	localStorage.setItem("login", "true"); 
        localStorage.setItem("user", user.key);
        this.switchLogButtons(1);
        this.router.navigate(['contacts']);
        this.updateGreeting();
    }

    // logs the user out, calls functions to update navbar and redirects user to landing page
    userLogout(){
    	localStorage.removeItem("login");
    	localStorage.removeItem("user");
    	this.updateGreeting();
    	this.switchLogButtons(2);
    	this.router.navigate(['']);
    }

    // changes greeting based on login status / username
    updateGreeting(){
        let username = localStorage.getItem("user");
        if(username != null){
            document.getElementById("greeting").innerHTML = username;
            document.getElementById("containerGreet").classList.remove("d-none");
        } else {
        	document.getElementById("containerGreet").classList.add("d-none");
        }
    }

    // shows login button on logout and logout buttton upon login
    switchLogButtons(currentState:loginState){
    	switch (currentState) {
    		case 1:
    			document.getElementById("in").classList.add("d-none");
    			document.getElementById("out").classList.remove("d-none");
    			break;
    		case 2:
    			document.getElementById("out").classList.add("d-none");
    			document.getElementById("in").classList.remove("d-none");
    			break;
    		default:
    			document.getElementById("out").classList.add("d-none");
    			document.getElementById("in").classList.remove("d-none");
    			alert("Error! Please reload the page.");
    	}
    }
}
