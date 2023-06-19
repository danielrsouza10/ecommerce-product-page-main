# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Build an e-commerce webpage with Angular and Angular Cli

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Add items to the cart


### Screenshot

![](./ScreenShot_01.png)
![](./ScreenShot_02.png)
![](./ScreenShot_03.png)
![](./ScreenShot_04.png)


### Links

- Solution URL: [GitHub repository](https://github.com/danielrsouza10/ecommerce-product-page-main)
- Live Site URL: [Vercel](https://ecommerce-product-page-main-two.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Angular](https://angular.io/)

### What I learned

I learned how to work with ngClass and *ngFor to save time and code in JavaScript.

To see how you can add code snippets, see below:

```html
<div
        class="modal"
        [ngClass]="modalActive === true ? 'show' : ''"
        (click)="modalActive = false"
      >
```
````html
<div class="small-images">
      <img
        *ngFor="let image of images"
        [src]="image"
        (click)="changeImage($event)"
        alt="image-product-thumbnail"
        width="75px"
        height="75px"
      />
````

### Continued development

- Switch the large product image by clicking on the small thumbnail images
- View the cart and remove items from it

## Author

- Linkedin - [Daniel Souza](https://www.linkedin.com/in/danielrsouza/)
- GitHub - [danielrsouza10](https://github.com/danielrsouza10)

**N

## Acknowledgments

Get some usefull help with Gustavo Lisboa who teach me how to build the modal with angular and TS.
- Linkedin - [Gustavo Lisboa](https://www.linkedin.com/in/gustavo-lisboa-811a1a208/)

