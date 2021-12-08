import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';

import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('App creation', () => {
    expect(component).toBeTruthy();
  });
  describe('Form and getters', ()=>
  {

    it('Form creation ', () => {
      const NewForm = component.NewForm
      console.log(NewForm)
      const NewFormValues = {
        Firstanme: null,
        Lastname:null,
        Phone:null,
        Login: null,
        email: null,
        password: null
      }
      expect(NewForm.value).toEqual(NewFormValues)
    });



    it('Firstname getter', () => {
      const NewForm = component.NewForm
      expect(NewForm.get('Firstanme')).toEqual(component.FirstName_)
    });

    it('Lastname getter', () => {
      const NewForm = component.NewForm
      expect(NewForm.get('Lastname')).toEqual(component.LastName)
    });


    it('Phone getter', () => {
      const NewForm = component.NewForm
      expect(NewForm.get('Phone')).toEqual(component.Phone)
    });


    it('Login getter', () => {
      const NewForm = component.NewForm
      expect(NewForm.get('Login')).toEqual(component.Login)
    });
    it('Email getter', () => {
      const NewForm = component.NewForm
      expect(NewForm.get('email')).toEqual(component.email)
    });
    it('Password getter', () => {
      const NewForm = component.NewForm
      expect(NewForm.get('password')).toEqual(component.password)
    });
  });


  it('Button blocking', () => {
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('#submit-button');
    expect(button.disabled).toBeTruthy();
  });


  describe('Is Input valid', () =>{

    it('Firstname', () => {

      let firstname = component.NewForm.controls['Firstanme']
      firstname.setValue('')
      expect(component.FirsNameErrors()).toBe('Заполните поле')
      firstname.setValue('Name')
      expect(component.FirsNameErrors()).toBe('')
    });


    it('Lastname', () => {
      let Lastname = component.NewForm.controls['Lastname']
      Lastname.setValue('')
      expect(component.LastNameErrors()).toBe('Заполните поле')
      Lastname.setValue('Lastname')
      expect(component.LastNameErrors()).toBe('')
    });
    it('Phone', () => {
      let phone = component.NewForm.controls['Phone']
      phone.setValue('')
      expect(component.PhoneErrors_()).toBe('Заполните поле')
      phone.setValue('String')
      expect(component.PhoneErrors_()).toBe('Некоректные данные')
      phone.setValue(' ')
      expect(component.PhoneErrors_()).toBe('Некоректные данные')
      phone.setValue('+1234')
      expect(component.PhoneErrors_()).toBe('Некоректные данные')
      phone.setValue('+380979312653')
      expect(component.PhoneErrors_()).toBe('')
    });

      it('Login', () => {
        let Login = component.NewForm.controls['Login']
        Login.setValue('')
        expect(component.LoginErrors()).toBe('Заполните поле')
        Login.setValue('A')
        expect(component.LoginErrors()).toBe('Некоректные данные')
        Login.setValue(' ')
        expect(component.LoginErrors()).toBe('Некоректные данные')
        Login.setValue('_+!~%')
        expect(component.LoginErrors()).toBe('Некоректные данные')
        Login.setValue('qwerty')
        expect(component.LoginErrors()).toBe('')

      });
      it('Email', () => {
        let email = component.NewForm.controls['email']
        email.setValue('')
        expect(component.EmailErrors()).toBe('Заполните поле')

        email.setValue(' ')
        expect(component.EmailErrors()).toBe('Некоректные данные')

        email.setValue('String')
        expect(component.EmailErrors()).toBe('Некоректные данные')

        email.setValue('String@')
        expect(component.EmailErrors()).toBe('Некоректные данные')

        email.setValue('String@gmail.com')
        expect(component.EmailErrors()).toBe('')
      });

      it('Password', () => {
        let Password = component.NewForm.controls['password']
        Password.setValue('')
        expect(component.PasswordErrors()).toBe('Заполните поле')

        Password.setValue(' ')
        expect(component.PasswordErrors()).toBe('Некоректные данные')

        Password.setValue('1111')
        expect(component.PasswordErrors()).toBe('Некоректные данные')

        Password.setValue('qwerty')
        expect(component.PasswordErrors()).toBe('')
      });
  });

});
