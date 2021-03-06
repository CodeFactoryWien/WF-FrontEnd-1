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

  	constructor(public loginService: LoginService) { }
    
  	ngOnInit() { }
  
    /* retrieves data from HTML form; calls login function if authentication is possible;
       shows error message if authentication fails */
	onSubmit(e) {
        let userInput = $("#user").val();
        let passwordInput = $("#pass").val();
        let matchFound:Boolean = false;

    	for (let user of this.users) {
        	if (userInput == user.key && passwordInput == user.value) {
				this.loginService.userLogin(user);
				matchFound = true;
                break;   
			}			        	     	
		}
		if (matchFound == false) {
			$("#message").html("Wrong password or username");
		}
  	}
}
