import { Time } from "@angular/common";
export class addModel{
    task_name?:string;
    task_id:number=0;
    task_status?:string;
    start_Time?:Time;
    end_Time?:Time;
    created_Date?:Date
    approval_Status?:string;
    assigned_Manager?:string;
    task_Description?:string;


}