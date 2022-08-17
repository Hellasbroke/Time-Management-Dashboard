import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../api.service';
import { addModel } from './add-task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  formValue ! : FormGroup <any>
  addObj:addModel= new addModel;

  constructor(private service:ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      task_name :[''],
      task_id :[''],
      task_status :[''],
      start_Time :[''],
      end_Time:[''],
      created_Date:[''],
      approval_Status :[''],
      assigned_Manager:[''],
      task_Description :[''],
    })
  }

  add(){
    this.addObj.task_name = this.formValue.value.task_name;
    this.addObj.task_id = this.formValue.value.task_id;
    this.addObj.task_status = this.formValue.value.task_status;
    this.addObj.start_Time  = this.formValue.value.start_Time ;
    this.addObj.end_Time  = this.formValue.value.end_Time ;
    this.addObj.created_Date = this.formValue.value.created_Date ;
    this.addObj.approval_Status = this.formValue.value.approval_Status ;
    this.addObj.assigned_Manager  = this.formValue.value.assigned_Manager;
    this.addObj.task_Description  = this.formValue.value.task_Description;
    this.service.postData(this.addObj).subscribe({next: (p) => {
      console.log(p)
    },
    error: (e) => {
      console.log(e)
      alert("error")
    },
    complete: () => {
      console.log("record added")
      alert("record added")
   
     
    }
  })
  }

}
