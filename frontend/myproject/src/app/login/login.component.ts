// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

onsubmit(item:any){

  console.log(item)

  if(item.name=="admin1" && item.password=='admin1'){

    console.log(this.router);

    this.router.navigate(['task-create']);

  }

  else if(item.name=="user1" && item.password=='user1'){

      console.log(this.router);

      this.router.navigate(['userdashboard']);

    }

  else{

    window.alert("username or password does not match")

  }

}
}
