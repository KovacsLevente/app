import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  data:any = [];
  constructor() { }

  ngOnInit(): void {
    this.data = localStorage.getItem("data");
    this.data = JSON.parse(this.data);
  }

  Update(num:number, ip:string, host:string, url:string){
    //console.log(num, ip, host, url);
    this.data[num][0] = ip;
    this.data[num][1] = host;
    this.data[num][2] = url;
    //console.log(this.data);
    localStorage.setItem("data", JSON.stringify(this.data));
  }

}
