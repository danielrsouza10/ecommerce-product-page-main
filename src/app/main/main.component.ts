import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  evento = '';
  numberOfItems: number = 0;
  mainImage: string = 'assets/images/image-product-1.jpg';
  modalActive: boolean = false;

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

  onMainImageIsClick(){
    const main = document.querySelector('.main');
    const imageContainer = document.createElement('img');
    imageContainer.className = 'image-container';
    imageContainer.style.width = '600px';
    imageContainer.style.height = '600px';
    imageContainer.style.position = 'absolute';
    imageContainer.style.zIndex = '2';
    imageContainer.src = this.mainImage;
    main?.appendChild(imageContainer);
    
  }

  changeImage(event: any) {
    if (
      event.target.currentSrc ===
      'http://localhost:4200/assets/images/image-product-1-thumbnail.jpg'
    ) {
      this.mainImage = 'assets/images/image-product-1.jpg';
    } else if (
      event.target.currentSrc ===
      'http://localhost:4200/assets/images/image-product-2-thumbnail.jpg'
    ) {
      this.mainImage = 'assets/images/image-product-2.jpg';
    } else if (
      event.target.currentSrc ===
      'http://localhost:4200/assets/images/image-product-3-thumbnail.jpg'
    ) {
      this.mainImage = 'assets/images/image-product-3.jpg';
    } else {
      this.mainImage = 'assets/images/image-product-4.jpg';
    }
  }
}
