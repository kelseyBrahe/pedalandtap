import { Component, OnInit } from '@angular/core';
import { LogoAnimationService } from '../Services/logo-animation.service';
import { MethodsService } from '../Services/methods.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private logoServices: LogoAnimationService, private methodsService: MethodsService, private viewportScroller: ViewportScroller, private router: Router) { 
    window.addEventListener('scroll', () => {this.methodsService.scroll()});
  }

  ngOnInit(): void {
    this.logoServices.loadContent();
    this.logoServices.animateLogo();
    this.methodsService.initPositions();
  }

  public onClick(elementId: string): void { 
    this.methodsService.onClick();
    this.viewportScroller.scrollToAnchor(elementId);
  }

  public goToLink(route: string): void {
    const r = "/" + route;
    this.methodsService.onClick();
    this.router.navigateByUrl(r);
  }

  mouseEnter(){
    if(window.screen.width > 1200){
      this.hopUp("97vh");
      setTimeout(this.hopDown, 300);
      setTimeout(()=>{this.hopUp("99vh")}, 600);
      setTimeout(this.hopDown, 800);
    } else {
      this.hopUp("87vh");
      setTimeout(this.hopDown, 300);
      setTimeout(()=>{this.hopUp("89vh")}, 600);
      setTimeout(this.hopDown, 800);
    }
  }

  hopUp(h: string){
    document.getElementById('header-segment').style.height = h;
  }

  hopDown(){
    document.getElementById('header-segment').style.height = '100vh';
  }

}
