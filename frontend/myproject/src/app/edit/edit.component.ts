import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  api: any;

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmits(tasksform: any) {
  //   this.service.update(this.dataById.TaskId, this.dataById).subscribe((response)=>{
  //     this.updatedData = response;
  //     console.log(this.updatedData);
  //     tasksform.reset();
  //     this.refreshTaskList();
  //     this.success="Uppdated Successfully";
  //  })
  // }

  deleteTask(data:any){
    this.api.deleteData(data.id).subscribe({next: (d: any) => {
      console.log(d)
    },
    error: (e: any) => {
      console.log(e)
      alert("error")
    },
    complete: () => {
      console.log("record deleted")
      alert("record deleted")
      
      
    }
  })
  }

}
