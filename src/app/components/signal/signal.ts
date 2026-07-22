import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  courseName:String = "Angular"
  angularVersion = signal("20")
  courseduration= signal<string>("2months")
  cityList = signal<string[]>(["pune","mumbai"])
  student = signal<any>(
    {
      name:"aaa",
      city:"kerala"
    }
  )
  changeDuration(){
    this.courseName = "react js"
    this.courseduration.set("3months")
  }
  addCity(cityName:string){
    this.cityList.update((old:string[])=>[...old,cityName])
    
  }

  changeCity(){
    this.student.update((oldobj:any)=>({...oldobj,city:"thane"}))
  }
}
