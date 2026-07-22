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

}
