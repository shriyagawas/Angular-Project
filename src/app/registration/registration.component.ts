import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }
  check(username:string , pass : string)
  { 
    var output = this.checkusernameandpassward(username,pass);
    if (output== true) {
      this.routes.navigate(['login']);
    }
    else{
      alert(" enter details");
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
