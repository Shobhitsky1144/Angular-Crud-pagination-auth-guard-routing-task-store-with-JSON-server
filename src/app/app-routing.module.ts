import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
  path:'',
  component:DashboardComponent,
  canActivate:[AuthGuard]
},
{
  path:'login',
  component:LoginComponent
},
{
  path:"add",
  component:AddTodoComponent,
  canActivate:[AuthGuard]
},
{
  path:"edit/:id",
  component:UpdateTodoComponent,
  canActivate:[AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
