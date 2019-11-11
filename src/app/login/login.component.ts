import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : string;
  password : string;
  someArray: {key: string, value: string}[] = [
    {key: 'Sandra', value: 'password'},
    {key: 'Tamas', value: 'wordpass'}
  ];

  ngOnInit() {
  }
  
  login() {
    this.user = document.getElementById("user").innerText;
    this.password = document.getElementById("pass").innerText;
    console.log(this.user)
    console.log(this.password)
  }


}
