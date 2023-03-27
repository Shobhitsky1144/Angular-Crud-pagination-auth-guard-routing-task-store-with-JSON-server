import { Router } from '@angular/router';
import { TodoService } from './../services/todo.service';
import { todo } from './../data-types';
import { Component } from '@angular/core';
import {FormGroup,FormControl,FormControlName} from '@angular/forms'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  todoList:undefined | todo[];
  todoForms=new FormGroup({
    
    fullName:new FormControl(''),
    height:new FormControl(''),
    weight:new FormControl(''),
    type:new FormControl(''),
  })
  constructor(private myTodo:TodoService,private router:Router){}
 
  submit(){
   this.todoForms.value && this.myTodo.addProduct(this.todoForms.value).subscribe((result)=>{
if(result){
this.router.navigate([""])
}
    })
  }
//   submit(data:todo){
// this.myTodo.addProduct(data).subscribe((result)=>{
//   if(result){
//     this.viewTodo()
//   }
// })
//   }

//   deleteTodo(id:number){
//     this.myTodo.deletedProduct(id).subscribe((result)=>{
//       if(result){
//       this.viewTodo()
//       }
//     })
//   }
}