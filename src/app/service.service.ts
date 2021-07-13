import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{map}from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
constructor(private http:HttpClient) { }


postEmployee(data:any)
{
return this.http.post<any>("http://localhost:3000/posts",data)
.pipe(map((res:any)=>{
  return res;
}))
}

getEmployee()
{
  return this.http.post<any>("http://localhost:3000/posts",data)
  .pipe(map((res:any)=>{
    return res;
  }))
  }

  updateEmployee(data:any,id:number)
  {
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
    }

    deleteEmployee(id:number)
    {
      return this.http.post<any>("http://localhost:3000/posts",data)
      .pipe(map((res:any)=>{
        return res;
      }))
      }
  



  // checkusernameandpassward(username:string , pass: string)
  // {
  //   if (username=="admin" && pass=="123456") {
  //     localStorage.setItem('username',"admin");
  //     return true
  //   }
  //   else{
  //     return false;
  //   }
  // }

  
}
function data<T>(arg0: string, data: any) {
  throw new Error('Function not implemented.');
}

