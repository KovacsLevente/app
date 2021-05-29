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
    
    //hardcoded adat
    this.data.push(["IP1","HOST1","URL1"]);
    this.data.push(["IP2","HOST2","URL2"]);
    this.data.push(["IP3","HOST3","URL3"]);
    
    //Fő api kérés,20-25 ID-vel rendelkező adatokat kiválóan lekéri, 
    //viszont ha a getApi() metóduson belül hívom meg a data.push eljárást
    //akkor valamiért minimálisan másképp jön létre a data array
    //amit a JSON.stringify már nem tud lekezelni, és üres adatot ad vissza
    //sehogy sem tudtam működésre bírni ezért hardcoded adatokkal folytattam
    /*
     let num = 20;
    for (let i = 0; i < 5; i++) {
      this.getApi(num);
      num++;
    }   */
  
    
    //console.log(this.data);
    //console.log(JSON.stringify(this.data));
    localStorage.setItem("data", JSON.stringify(this.data));
  }

  getApi(num:number){
    var url ="https://phishstats.info:2096/api/phishing?_where=(id,eq," + num.toString()+")";
    this.http.get(url).subscribe((res)=>{
      var temp:any = [];
      temp = res
      //this.data.push(["IP3","HOST3","URL3"]);
      //console.log("ID" + num);
      //console.log(temp);
      this.data.push([String(temp[0].countryname),String(temp[0].ip),String(temp[0].host)]);
    })
  }
}
