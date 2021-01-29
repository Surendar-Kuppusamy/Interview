import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { AjaxService } from '../../Services/Ajax/ajax.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public fb: FormBuilder, public ajax: AjaxService) { }

  response:any;
  signupForm = this.fb.group({
    email: [''],
    password: [''],
    confirmpassword: ['']
  })

  ngOnInit(): void {

  }

  onSubmit(): void {
    let url: string ='http://localhost/Server/Interview/Angular/Class/ajax/project.ajax.php';
    let data:object = {
      command: 'signup',
      data: this.signupForm.value
    };

    console.log(this.signupForm.value);
    this.ajax.post(url, data).subscribe(res => {
      this.response = res;
      console.log(this.response);
      let cusm:string;
      if(this.response.status == 'error') {
        for (const mes in this.response.message) {
          cusm=this.response.message[mes][0];
        }
        alert(cusm);
      } else {
        alert(this.response.message);
      }
      
    });
  }


}
