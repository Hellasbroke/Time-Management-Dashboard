import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  searchText:any;

  constructor(private service:ApiService) { }

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

}
