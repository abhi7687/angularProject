import { Component , OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  username: string = '';
  password:string = '';

  isLogin: boolean = true;

  errorMessage: string = "";
  

constructor(public dialogRef: MatDialogRef<LoginComponent>,private router: Router, private http: HttpClient) {}



login() {
  console.log(this.username);
  console.log(this.password);

  let bodyData = {
    username: this.username,
    password: this.password
  };

  this.http.post("http://localhost:3000/admin/login", bodyData).subscribe((resultData: any) => {
    console.log(resultData);

    if (resultData.status){
      this.dialogRef.close();
      this.router.navigateByUrl('/home');
    }
    else {
      alert("Incorrect username or password");
      console.log("Error login");
      this.dialogRef.close();
    }
  });
}


  
}
