
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  userInput : any;
  passwordInput : any;
  user : any;
  button : any;
  button2: any;

  /* User names and passwords */
  users = [
    {key: 'Sandra', value: 'password'},
    {key: 'Tamas', value: 'wordpass'},
    {key: 'Ece', value: 'boss'},
  ];
    

  constructor() {}

  ngOnInit() {
  }
  
  onSubmit(e) {
    /* This sets the login status to true in case the user name and password match and console logs the login message
    or the wrong password message*/
    localStorage.setItem("login", "false");
    this.userInput = (<HTMLInputElement>document.getElementById("user"));
    this.passwordInput = (<HTMLInputElement>document.getElementById("pass"));
    for (let user of this.users) {
      if (this.userInput.value == user.key && this.passwordInput.value == user.value) {
      localStorage.setItem("login", "true");        
      }
    }
    if (localStorage.getItem("login") == "true") {
      /* At successful login hide the Submit button and displays the continue button */
      document.getElementById("message").innerText = "You are logged in";
      document.getElementById("butt").hidden = true; // the button disappears after login
      (<HTMLButtonElement>document.getElementById("routerButton")).style.display = "block";          
    }
    else {
      document.getElementById("message").innerText = "Wrong password";
    }
  }
    
  onLogOut() {
    /* This sets the login status to false and console logs the logout message*/
    localStorage.setItem("login", "false");
    console.log("You are logged out") 
  }


}
