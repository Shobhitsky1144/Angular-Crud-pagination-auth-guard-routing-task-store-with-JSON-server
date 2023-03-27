import { TodoService } from './../services/todo.service';
import { Router } from '@angular/router';
import { login } from './../data-types';

import { Component } from '@angular/core';
import {FormGroup,FormControlName,FormControl,Validators} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 data:undefined | login;
constructor(private router:Router,private myTodo:TodoService){}
  userLogin=new FormGroup({
    email:new FormControl('shobhit.yadav11@ril.com',[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    password:new FormControl('12345',[Validators.required,Validators.minLength(4)])
  })


  submit(){
    this.data=this.userLogin.value;
   this.data && this.myTodo.checkUser(this.data)
  }

  get email(){
return this.userLogin.get('email')
  }
  get password(){
    return this.userLogin.get('password')
      }
}
