import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'newweb';

  constructor(private dialog:MatDialog){}

  ngOnInit(): void {
      this.openLogin();
  }

  openLogin():void{
    this.dialog.open(LoginComponent, {
      width: '1000px',
      height:'500px'
    })
  }

}
