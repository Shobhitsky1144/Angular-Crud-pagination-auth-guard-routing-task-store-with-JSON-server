import { todo } from './../data-types';
import { TodoService } from './../services/todo.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup,FormControl,FormControlName} from '@angular/forms'

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent {
  productData:undefined | todo
  constructor(private myTodo:TodoService,private route:ActivatedRoute,private routes:Router){}
  updateForm=new FormGroup({
    
    fullName:new FormControl(''),
    height:new FormControl(''),
    weight:new FormControl(''),
    type:new FormControl(''),
  })
  ngOnInit(){
    let productId=this.route.snapshot.paramMap.get('id');
    productId && this.myTodo.getProduct(productId).subscribe((data)=>{    
   if(data){
    this.productData=data
     this.updateForm?.patchValue(data);
    }
    })
    }
  edit(){
    if(this.productData){ 
      let data:todo=  this.updateForm.value
    data.id=this.productData.id;
    this.myTodo.updateProduct(data).subscribe((result)=>{
      if(result){
     this.routes.navigate([''])
      }
    })
    }

  }
}



