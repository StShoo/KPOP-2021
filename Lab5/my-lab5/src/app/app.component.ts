import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Subscriber } from 'rxjs';
import { User } from './user.model';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { DialogContentExampleDialog } from './popup';


export interface Users {
  name: string ;
  email: any;
  login: string ;
  password: string;
  phonenumber: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'lab5';
  cancel = false
  json_result: any
  date: any[] = []
  user: User[] = []
  favorite: Users[] = []

  constructor(private http: HttpClient , public dialog: MatDialog){

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogs(object:any){

    const dialogRef = this.dialog.open(DialogContentExampleDialog,{
      data: {
        name: object.name,
        email: object.email,
        login: object.login,
        password: object.password,
        cell: object.cell
      }
    })
  }

  Search(){
    this.json_result = this.http.get('https://randomuser.me/api/?results=10' )
      .subscribe((json_result)=>{
        this.json_result = json_result;
        console.log(this.json_result)

        for (var i = 0 ; i<20; i++) {
          let name: string = ""
          name = this.json_result.results[i].name.title + " " +
            this.json_result.results[i].name.first  + " "
            + this.json_result.results[i].name.last
          this.user.push( new User(name,
            this.json_result.results[i].email,this.json_result.results[i].login.username,
            this.json_result.results[i].login.password,
            this.json_result.results[i].cell));
        }

      })
    console.log(this.user)
    return this.json_result
  }

  test(object:any){
    console.log('GET OBJECT'+object)
    this.favorite.push(object)
    console.log(this.favorite)
  }

}
