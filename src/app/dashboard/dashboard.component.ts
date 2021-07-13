import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormBuilder,FormGroup} from'@angular/forms'
import { dashboardmodel } from './dashboard.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//   name:string='';
//   position:string='';
formValue ! :FormGroup;
dashboardmodelobj:dashboardmodel=new dashboardmodel();
  
  

  constructor(private router:Router,private formbuilder:FormBuilder,private service:ServiceService) { }
 
   ngOnInit(): void {
     this.formValue=this.formbuilder.group({
       firstName:[''],
       lastName:[],
       email:[],
       mobile:[],
       salary:[],
     })
  }
  postEmployeeDetails()
  {
    this.dashboardmodelobj.firstName=this.formValue.value.firstName;
    this.dashboardmodelobj.lastName=this.formValue.value.lastName;
    this.dashboardmodelobj.email=this.formValue.value.email;
    this.dashboardmodelobj.mobile=this.formValue.value.mobile;
    this.dashboardmodelobj.salary=this.formValue.value.salary;

    this.service.postEmployee(this.dashboardmodelobj)
    .subscribe((res: any)=>{
      console.log(res);
      alert("employee added successfully")
    
   
    

    })

  }
  
// pay()
//   {
// this.router.navigate(['payroll'])
//   }
//   pclick()
//   {
//   this.router.navigate(['policy']);
//   }
//   prj()
//   {
// this.router.navigate(['project'])
//   }
//   reports()
//   {
// this.router.navigate(['reports']);
//   }
//   newEmployeeClicked=false;
//   employees=[
//     {
//       name:'shriya Gawas',position:'Trainee'},
//     ];
//   color:any;
// model:any={};
// model2:any={};
// addEmployee(regForm:any){
//     this.employees.push(this.model);
//     this.model={};
//    }
//   deleteEmployee(i:any){
//     this.employees.splice(i);
//     console.log(i)
//   }
// myValue:any;
// editEmployee(editEmployeeInfo:any)
// {
//   this.model2.name=this.employees[editEmployeeInfo].name;
//   this.model2.position=this.employees[editEmployeeInfo].position;
//   this.myValue=editEmployeeInfo;
// }
// updateEmployee(){
// let editEmployeeInfo = this.myValue;
//   for(let i = 0;i<this.employees.length;i++)
//   {
//     if(i==editEmployeeInfo){
//       this.employees[i]=this.model;
//       this.model=[];
//       this.employees[i]=this.model2;
//       this.model2=[];
//     }
//     }
// }
// addNewEmployee()
// {
// this.newEmployeeClicked = !this.newEmployeeClicked;
// }
// changeColorOne(){
//   this.color=!this.color;
//   if(this.color){
//     return 'white';
//   }
//   else{
//     return 'pink';
//   }
// }
}


