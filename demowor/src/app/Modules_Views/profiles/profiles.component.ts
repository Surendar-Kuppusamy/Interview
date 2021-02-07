import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor(public route: ActivatedRoute, public fb: FormBuilder) { }
  id:number;

  form = this.fb.group({
    gender:[''],
    check: [false]
  });

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id=params['id'];
      
    });

    if(this.id != undefined) {
      console.log(this.id);
    }
  }

}
