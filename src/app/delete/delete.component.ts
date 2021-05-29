import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  data:any = [];
  constructor() { }

  ngOnInit(): void {
    this.data = localStorage.getItem("data");
    this.data = JSON.parse(this.data);
  }

  delete(name:string): void{
    console.log(name);

    for( var i = 0; i < this.data.length; i++){ 
    
      if ( this.data[i][0] === name) { 
          this.data.splice(i, 1);
          localStorage.removeItem("data");
          localStorage.setItem("data", JSON.stringify(this.data));
      }
  
    }
  }

}
