import { TodoService } from './../services/todo.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuth=false;
  constructor(private myTodo:TodoService,private router:Router){}
  ngOnInit(){
this.router.events.subscribe((val:any)=>{
  if(val.url){
if(localStorage.getItem("user")){
this.isAuth=true
}
  }
})
  }
logout(){
  this.isAuth=false;
  localStorage.removeItem("user");
  this.router.navigate(['login']);
}
}
