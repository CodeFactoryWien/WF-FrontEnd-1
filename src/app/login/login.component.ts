import { Component, OnInit } from '@angular/core';
import { LoginService  } from "../shared/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  	/* User names and passwords */
  	users = [
    	{key: 'Sandra', value: 'password'},
    	{key: 'Tamas', value: 'wordpass'},
    	{key: 'Ece', value: 'boss'},
  	];
    

  	constructor(private loginService: LoginService) {}
    
  	ngOnInit() {
  	}
  
	onSubmit(e) {
    /* This sets the login status to true in case the user name and password match and console logs the login message
    or the wrong password message*/
    	let userInput = (<HTMLInputElement>document.getElementById("user"));
    	let passwordInput = (<HTMLInputElement>document.getElementById("pass"));
    	for (let user of this.users) {
        	if (userInput.value == user.key && passwordInput.value == user.value) {
            	this.loginService.userLogin(user);       
        	}
        	else {
            	document.getElementById("message").innerText = "Wrong password or username";
        	}
    	}
  	}
}
