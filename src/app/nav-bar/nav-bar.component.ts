import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
 //to make the variable form main component visible in this component 
  @Input() basketItems: any;
  
 
}
