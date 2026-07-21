import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  constructor(){
    console.log("constructor executed");
    
  }
  ngOnInit(): void {
    console.log("ng on it");
    
  }
}
