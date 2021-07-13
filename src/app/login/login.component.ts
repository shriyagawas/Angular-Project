
import { Component, OnInit } from '@angular/core';

import { Router, Routes } from '@angular/router';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
 
  constructor(private service : ServiceService , private routes:Router){}
 ngOnInit(): void {
}
  check(username:string , pass : string)
  {
    var output = this.checkusernameandpassward(username,pass);
    if (output== true) {
      this.routes.navigate(['dashboard']);
    }
    else{
      alert(" no valid user");
    }
  }

  checkusernameandpassward(username:string , pass: string)
  {
    if (username=="admin" && pass=="123456") {
      localStorage.setItem('username',"admin");
      return true
    }
    else{
      return false;
    }
  }




}
