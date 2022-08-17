import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    TaskCreateComponent,
    TaskDetailComponent,
    TasklistComponent,
    UserdashboardComponent,
    MainpageComponent,
    EditComponent,
    LoginComponent,
    PipePipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
