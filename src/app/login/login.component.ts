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
  users = [
    {key: 'Sandra', value: 'password'},
    {key: 'Tamas', value: 'wordpass'}    
  ];

  constructor() {}

  ngOnInit() {
  }
  
  onSubmit(e) {
    console.log(this.users)
    
  }


}
