import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  
  taskDetails = null as any
  UserValue = {
    'task_name':"",
    'task_id':"",
    'task_status' :"",
    'start_Time' :"",
    'end_Time' :"",
    'created_Date' :"",
    'approval_Status' :"",
    'assigned_Manager' :"",
    'task_Description' :""
    
    
  }
  

 

  

  constructor( private service:ApiService) { }
  searchText:any;

  tasklist:any=[];

  ngOnInit(): void {

    this.gettasklist()
  }
  gettasklist(){
    this.service.getItems().subscribe(res=>{
      this.tasklist=res
      console.log(res)
    })
  }

  deleteuser(item: any) {
    this.service.deleteusers(item.task_id).subscribe(
    (resp) => {
    console.log(resp);
    },
    (err) => {
    console.log(err);
    }
    );
    }

    edit(item: any){
    this.UserValue = item;
      }

  updateuser(){
  this.service.updateusers(this.UserValue.task_id,this.UserValue).subscribe(
  (resp) => {
  console.log(resp);
  },
  (err) => {
  console.log(err);
  }
  );
  }

  // get by id
  // edit(id:any) { 
  //   // console.log(id)
  //   this.service.getDataById(id).subscribe((response)=>{
  //     this.dataById = response;
  //     console.log(this.dataById);
  //     this.dataByIdCopy = {...response};
  //     this.success=" ";
  //   })
  // }

  // update
  // onSubmits(tasksform: any) {
  //   this.service.update(this.dataById.TaskId, this.dataById).subscribe((response)=>{
  //     this.updatedData = response;
  //     // console.log(this.updatedData);
  //     tasksform.reset();
  //     this.refreshTaskList();
  //     this.success="Updated Successfully";
  //  })


}
