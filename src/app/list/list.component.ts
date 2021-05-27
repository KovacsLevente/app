import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private data:any = [];
  city = "";
  //temp:any = [];

  test1:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getApi(num:number){
    var url ="https://phishstats.info:2096/api/phishing?_where=(id,eq," + num.toString()+")";
    this.http.get(url).subscribe((res)=>{
      var temp:any = [];
      temp = res
      this.data.push(temp[0].countryname +"#"+ temp[0].ip +"#"+ temp[0].host);
      console.log("ID" + num);
    })
  }

  getData(){
    
    let num = 20;

    for (let i = 0; i < 5; i++) {
      this.getApi(num);
      localStorage.setItem("teszt1", i.toString());
      num++;
    }

    console.log(this.data)
    
    localStorage.setItem("data", this.data);
    this.test1 = localStorage.getItem("data");
    this.test1 = JSON.parse(this.test1);
    console.log("localstorage1:" + this.test1[0]);
    console.log("localstorage2:" + this.test1[1]);
    
    
    
    /*
    url ='https://phishstats.info:2096/api/phishing?_where=(id,eq,15)';
    this.http.get(url).subscribe((res)=>{
      this.temp = res
      this.data.push(this.temp[0].city +"#"+ this.temp[0].ip +"#"+ this.temp[0].host);
      console.log("masodik:" + this.data[1]);
      console.log(this.data);
     
    })
     
       */
      
  }
}
