import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  imports: [NgClass],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css',
})
export class Attribute {
   studentList=[
    {name:"aaa",city:"pune",status:true},
    {name:"bbb",city:"mumbai",status:true},
    {name:"ccc",city:"pune",status:false},
    {name:"ddd",city:"nagpur",status:true}


  ]
  themeclass:string="bg-success"
}
