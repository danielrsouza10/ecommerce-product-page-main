import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {

  numberOfItems: number = 0;
  mainImage: string = 'assets/images/image-product-1.jpg';
  images: string[] = [
    'assets/images/image-product-1-thumbnail.jpg',
    'assets/images/image-product-2-thumbnail.jpg',
    'assets/images/image-product-3-thumbnail.jpg',
    'assets/images/image-product-4-thumbnail.jpg',
  ];

  onPlusButton() {
    this.numberOfItems++;
  }

  onMinusButton() {
    this.numberOfItems > 0 ? this.numberOfItems-- : (this.numberOfItems = 0);
  }

  changeImage() {
    alert('you click me');
  }
}
