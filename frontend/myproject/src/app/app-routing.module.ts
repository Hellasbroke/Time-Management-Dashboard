import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
{
  path:'manager', component: ManagerComponent
},
{
  path:'task-create', component: TaskCreateComponent
},
{ 
  path:'task-detail', component:TaskDetailComponent
},
{
  path:'tasklist', component:TasklistComponent
},
{
  path:'userdashboard', component:UserdashboardComponent
},
{
  path:'mainpage', component:MainpageComponent
},
{
  path:'login', component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
