import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  data:any = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.data = localStorage.getItem("data");
    this.data = JSON.parse(this.data);
  }

  Create(ip:string, host:string, url:string){
    this.data.push([ip,host,url]);
    localStorage.setItem("data", JSON.stringify(this.data));
    this.router.navigate(['/list']);
  }
}
