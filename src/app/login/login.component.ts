import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "username";
  password = "pass";

  constructor() { }

  ngOnInit(): void {
  }

  checklogin(): void{
    if(this.username == "admin" && this.password=="admin") alert("login success");
    else alert("login fail");
  }

}
