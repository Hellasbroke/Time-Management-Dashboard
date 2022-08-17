import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiRoot = 'http://127.0.0.1:8000/';
  private url = 'http://127.0.0.1:8000/task/';

  constructor(private http: HttpClient) { }


  getItems(){
    return this.http.get<any>(this.apiRoot.concat('task/')).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

  postData(data:any){
    return this.http.post<any>(this.apiRoot.concat('task/'), data).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

  
  public deleteusers(task_id: any) {
    return this.http.delete(this.apiRoot.concat('task/') + task_id);
    }

  public updateusers(task_id: any,item: any) {
    // return this.http.put(this.apiRoot.concat('task/') + task_id,item );
    return this.http.put(this.apiRoot + 'task/' + task_id+"/",item );
    }


    getTaskById(pk:number) {

      return this.http.get(this.url + pk)

    }

    updateTaskById(pk:number,data:object) {

      return this.http.put(this.url + pk+"/", data)

    }

    

}




