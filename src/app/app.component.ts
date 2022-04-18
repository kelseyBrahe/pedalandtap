import { Component } from '@angular/core';
import { MethodsService } from './Services/methods.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PedalandTap';

  constructor(private methodsService: MethodsService, private viewportScroller: ViewportScroller, private router: Router){
  }

  public goToLink(route: string): void {
    const r = "/" + route;
    this.methodsService.onClick();
    this.router.navigateByUrl(r);
  }

  ngOnInit(): void {
    window.addEventListener('load', () => {this.methodsService.initPositions(), this.methodsService.checkPosition(), this.methodsService.scroll()}, true);
    window.addEventListener('resize', () => {this.methodsService.initPositions()}, true);
    window.addEventListener('scroll', () => {this.methodsService.checkPosition(), this.methodsService.scroll()}, true);
  }

  revertColors = () => {
    this.methodsService.revert();
  }
}
