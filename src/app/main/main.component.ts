import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  numberOfItems: number = 0;

  onPlusButton(){
    this.numberOfItems++;
  }

  onMinusButton(){
    if(this.numberOfItems > 0){
      this.numberOfItems--;
    } else{
      this.numberOfItems = 0;
    }
    
  }
}
