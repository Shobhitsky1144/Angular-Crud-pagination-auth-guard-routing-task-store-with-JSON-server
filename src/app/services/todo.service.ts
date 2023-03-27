import { Router } from '@angular/router';
import { todo, login } from './../data-types';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  isLoggedIn=new BehaviorSubject<boolean>(false);
   apiUrl="http://localhost:3000/todos";

  constructor(private http:HttpClient,private router:Router) { }

  addProduct(data:todo){
 
return this.http.post<todo>(this.apiUrl,data)
  }
  viewProduct(){
    return this.http.get<todo[]>(this.apiUrl)
  }
  deletedProduct(id:number){
    return this.http.delete<todo>(`${this.apiUrl}/${id}`)
  }
  getProduct(id:string){
    return this.http.get<todo>(`${this.apiUrl}/${id}`)
  }
  updateProduct(data:todo){
    return this.http.put<todo>(`${this.apiUrl}/${data.id}`,data)
  }
  checkUser(data:login){
    if(data){
      this.isLoggedIn.next(true);
      localStorage.setItem("user",JSON.stringify(data.email))
this.router.navigate([''])
    }
  }


}
