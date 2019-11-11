import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userInput : any;
  passwordInput : string;
  user : any;
  Users: {key: string, value: string}[] = [
    {key: 'Sandra', value: 'password'},
    {key: 'Tamas', value: 'wordpass'}
  ];

  constructor() {}

  ngOnInit() {
  }
  
  login() {
    this.userInput = document.getElementById("user").value;
    this.passwordInput = document.getElementById("pass").value;
    console.log(this.userInput)
    console.log(this.passwordInput)
    for (let user of this.Users) {
      console.log(user)
      if (this.userInput == user.key) {}
    }
  }


}
