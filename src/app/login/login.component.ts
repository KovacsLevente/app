import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  private data:any = [];

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
  }

  checklogin(): void{
    if(this.username == "admin" && this.password=="admin"){
      localStorage.setItem("dummylogin", "true");
      this.getData();
      this.router.navigate(['/list']);
    } 
    else localStorage.setItem("dummylogin", "false");
  }

  getData(){

    localStorage.removeItem("data");
    
    //
    this.data.push(["IP1","HOST1","URL1"]);
    this.data.push(["IP2","HOST2","URL2"]);
    this.data.push(["IP3","HOST3","URL3"]);
    
    
    /*
    let num = 20;

    for (let i = 0; i < 5; i++) {
      this.getApi(num);
      num++;
    }*/

    console.log(this.data);
    localStorage.setItem("data", JSON.stringify(this.data));
  }

  getApi(num:number){
    var url ="https://phishstats.info:2096/api/phishing?_where=(id,eq," + num.toString()+")";
    this.http.get(url).subscribe((res)=>{
      var temp:any = [];
      temp = res
      this.data.push([temp[0].countryname,temp[0].ip,temp[0].host]);
      console.log("ID" + num);
      console.log(temp);
    })
  }

}
