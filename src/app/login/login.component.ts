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
  Users: {key: string, value: string}[] = [
    {key: 'Sandra', value: 'password'},
    {key: 'Tamas', value: 'wordpass'}
  ];

  constructor() {}

  ngOnInit() {
    this.button = document.getElementById("butt");
    this.button.addEventListener("click", function(){
      this.userInput = (<HTMLInputElement>document.getElementById("user")).value;
      this.passwordInput = (<HTMLInputElement>document.getElementById("pass")).value;
      console.log(this.userInput)
      console.log(this.passwordInput)
      console.log(typeof(this.Users))
      for (let user of this.Users) {
        console.log(user)
        if (this.userInput == user.key) {}
      }
    })
  }
  
  login() {
    
    
  }


}
