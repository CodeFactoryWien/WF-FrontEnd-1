import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
      
  constructor() {}

  ngOnInit() {
    if (localStorage.getItem("login") == "true") {
      document.getElementById("log").innerHTML = `
      <a  id="login-button" (click)="logOut($event)"  routerLink="/contacts" class="nav-link js-scroll-trigger"  href="#contacts">Logout</a>
      `
      document.getElementById("login-button").addEventListener("click", function() {
        localStorage.setItem("login", "false");
        console.log("in");
        document.getElementById("log").innerHTML = `
        <a  id="login-button" routerLink="/login" class="nav-link js-scroll-trigger" href="#login">Login</a>
        `
      })
    }
  }

 }


