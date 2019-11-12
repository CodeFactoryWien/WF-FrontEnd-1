
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    

  constructor(private router: Router) {}

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
            document.getElementById("log").innerHTML = `
            <a id="login-button" routerLink="/" class="nav-link js-scroll-trigger" href="">Logout</a>`
            document.getElementById("login-button").addEventListener("click", function() {
              localStorage.setItem("login", "false");
              console.log("in");
              document.getElementById("log").innerHTML = `<a id="login-button" routerLink="/login" 
                                            class="nav-link js-scroll-trigger" href="">Login</a>`
          })
            this.router.navigate(['contacts']);       
        }
        else {
            document.getElementById("message").innerText = "Wrong password or username";
        }
    }
  }
    
  onLogOut() {
    /* This sets the login status to false and console logs the logout message*/
    localStorage.setItem("login", "false");
    console.log("You are logged out");
    this.router.navigate(['/']);
  }


}
