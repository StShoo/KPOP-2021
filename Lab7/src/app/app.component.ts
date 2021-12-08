import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab7';
  NewForm: FormGroup | any

  ngOnInit() {
    this.NewForm = new FormGroup({
      'Firstanme': new FormControl(null, [Validators.required]),
      'Lastname': new FormControl(null, [Validators.required]),
      'Phone': new FormControl(null, [Validators.required,
        Validators.pattern(/[-+()0-9]{7,}/)]),
      'Login': new FormControl(null, [Validators.required,
        Validators.pattern('^[\\w\\d]{5,15}$')]),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'password': new FormControl(null, [Validators.required,
        Validators.pattern('^[\\w\\d]{5,15}$')])
    })
  }

  FirsNameErrors() {
    return this.FirstName_.errors?.['required'] ? 'Заполните поле' :''
  }
  LastNameErrors() {
    return this.LastName.errors?.['required'] ? 'Заполните поле' :''
  }
  PhoneErrors_() {
    return this.Phone.errors?.['required'] ? 'Заполните поле' :
      this.Phone.errors?.['pattern'] ? 'Некоректные данные' :''
  }

  LoginErrors() {
    return this.Login.errors?.['required'] ? 'Заполните поле' :
      this.Login.errors?.['pattern'] ? 'Некоректные данные' :''
  }

  EmailErrors() {
    return this.email.errors?.['required'] ? 'Заполните поле' :
      this.email.errors?.['email'] ? 'Некоректные данные' : ''
  }

  PasswordErrors() {
    return this.password.errors?.['required'] ? 'Заполните поле' :
      this.password.errors?.['pattern'] ? 'Некоректные данные' : ''
  }

  ButtonRegister(){
      console.log("User Has been regestered!")
  }



  get FirstName_() {
    return this.NewForm.get('Firstanme');
  }
  get LastName() {
    return this.NewForm.get('Lastname');
  }
  get Phone() {
    return this.NewForm.get('Phone');
  }

  get Login() {
    return this.NewForm.get('Login');
  }

  get email() {
    return this.NewForm.get('email');
  }

  get password() {
    return this.NewForm.get('password');
  }
}
