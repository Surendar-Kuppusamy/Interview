import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

  loginForm = this.fb.group({
    email: [''],
    dynamic: this.fb.array([
      this.fb.group({name: ['']})
    ])
  });

  get dynamicValue() {
    return this.loginForm.get('dynamic') as FormArray;
  }

  addDynamic() {
    this.dynamicValue.push(this.fb.group({name: ['']}));
  }

  ngOnInit(): void {
  }

}
