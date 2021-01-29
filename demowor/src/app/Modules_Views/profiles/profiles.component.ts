import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }
  id:number;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id=params['id'];
      
    });

    if(this.id != undefined) {
      console.log(this.id);
    }
  }

}
