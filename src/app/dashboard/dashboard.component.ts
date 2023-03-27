import { todo } from './../data-types';

import { TodoService } from './../services/todo.service';
import { Component } from '@angular/core';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  todoList:undefined | todo[]
  editIcon=faEdit;
  deleteIcon=faTrash;
  totalPage:undefined | number;
  perPage=2;
  counter=1;
  total:undefined | number[];
  constructor(private myTodo:TodoService){}
  
 ngOnInit(){
    this.viewTodo()
  }
  viewTodo(){
    this.myTodo.viewProduct().subscribe((result)=>{
      if(result){
        this.totalPage=Math.ceil(result.length/this.perPage);
        // console.log("start",this.counter*this.perPage-this.perPage,"end",
        // this.counter*this.perPage,"current",this.count,"total",this.totalPage)
     this.todoList=result.slice(this.counter*this.perPage-this.perPage,this.counter*this.perPage);
      this.total=Array.from({ length: this.totalPage }, (v, i) => i+1)
      }
    
    })
  }
  next(){
this.counter=this.counter+1;
this.viewTodo()
  }

  setCurrentPage(page:number){
this.counter=page;
this.viewTodo()
  }

  prev(){
    this.counter=this.counter-1;
    this.viewTodo()
      }

  deleteTodo(id:number){
    let isResponse=confirm("Are u sure ? you want to delete this todo")
   
isResponse && this.myTodo.deletedProduct(id).subscribe((result)=>{if(result){this.viewTodo()}})
  }



}
