import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {
  burger;
  currentColor;
  elements;
  windowHeight;
  colorTriggers;
  check;

  constructor(private viewportScroller: ViewportScroller) { 
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', () => {this.scroll()}, true);
  }

  public onClick(): void { 
    if(this.check.checked){
      this.check.checked = false;
      this.revert();
      this.initPositions();
    }
  }

  /**
   * This method changes the color of the menu toggler when it reaches a given point on the screen.
   */
  scroll = (): void => {
    if (!this.check.checked) {
      this.colorTriggers.forEach(trigger => {
        let top = trigger.getBoundingClientRect().top + window.scrollY;
        let bottom = top + trigger.getBoundingClientRect().bottom + window.scrollY;
        if(window.pageYOffset >= top && window.pageYOffset <= bottom) {
          this.burger.style.backgroundColor = trigger.getAttribute("togglerColor");
          this.currentColor = trigger.getAttribute("togglerColor");
        }
      })
    }
  }

  /**
   * This method reverts the color of the menu when the user closes the expanded navigation.
   */
  revert = (): void => {
    if (this.check.checked) {
      this.burger.style.backgroundColor = "#4d4646";
    } else {
      this.burger.style.backgroundColor = this.currentColor;
    }
  }

  initPositions = (): void => {
    this.check = document.getElementById("menu-checkbox") as HTMLInputElement;
    this.burger = document.getElementById("menu-toggler");

    this.elements = Array.from(document.querySelectorAll('.hidden'));
    this.colorTriggers = Array.from(document.querySelectorAll('.changeToggler'));
    this.windowHeight = window.innerHeight;
  }

  checkPosition = (): void => {
    for(let i=0; i < this.elements.length; i++){
      let element = this.elements[i];
      let positionFromTop = this.elements[i].getBoundingClientRect().top;
      let animation = element.getAttribute("animate_me");
      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add(animation);
        element.classList.remove('hidden');
      }
    }
  }
}