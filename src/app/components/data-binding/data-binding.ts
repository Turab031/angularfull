import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding  {
  courseName:string  ="angular20"
  isActive:boolean =true
  currentDate:Date = new Date()
  rollno:number = 123
  minTestLength = 5
  spanClassName = 'secondary'
  constructor(){
    console.log(this.courseName);
    this.courseName = "angular tutorial"
    console.log(this.courseName);
    
    
  }

  showAlert(){
    alert("wecome to angular 20")

  }
  onCityChange(){
    alert("city is changed")
  }
}
