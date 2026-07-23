import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controllflow',
  imports: [FormsModule],
  templateUrl: './controllflow.html',
  styleUrl: './controllflow.css',
})
export class Controllflow {
  selectedCaste:string=''
  isActive=signal<boolean>(false)
  changeStatus( value:boolean){
    this.isActive.set(value)

  }
  cityList =["pune","nagpur","mumbai"]

  studentList=[
    {name:"aaa",city:"pune",status:true},
    {name:"bbb",city:"mumbai",status:true},
    {name:"ccc",city:"pune",status:false},
    {name:"ddd",city:"nagpur",status:true}


  ]

}