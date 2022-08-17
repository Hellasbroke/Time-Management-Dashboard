import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  public searchTerm = '';

  public taskById:any;

  public taskByIdCopy:any;

  public updatedTask:any;

  public task:any;
  searchText:any;

  constructor( private service:ApiService) { }


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
  



action(pk:number) {
 console.log(pk)
 this.service.getTaskById(pk).subscribe((response)=>{
 this.taskById = response;
 console.log(this.taskById)
 this.taskByIdCopy = {...response};
 })
}
onSubmit() {

 this.service.updateTaskById(this.taskById.task_id, this.taskById).subscribe((response)=>{
this.updatedTask = response;
console.log(this.updatedTask)
 window.alert("Task action taken successfully")})

}


  
}
