import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb:FormBuilder) { }

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });

  ngOnInit(): void {
    console.log('Test');
  }

  onSubmit():void {
    console.log(this.loginForm.value);
  }

}
