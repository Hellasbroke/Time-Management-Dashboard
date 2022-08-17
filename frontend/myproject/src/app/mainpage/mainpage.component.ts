import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

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
}
