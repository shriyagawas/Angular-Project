import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }
  back()
  {
    this.routes.navigate(['dashboard'])
  }

}
