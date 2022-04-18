import { Component, OnInit } from '@angular/core';
import { MethodsService } from '../Services/methods.service';
import { Menu } from '../Services/menu';
import { menuItem } from '../Services/menuItem';
import { Drinks } from '../Services/drinks'
import { alcohol } from '../Services/alcohol';
import { isTemplateExpression, skipPartiallyEmittedExpressions } from 'typescript';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu;
  starters: menuItem[];
  salads: menuItem[];
  pasta: menuItem[];
  burgers: menuItem[];
  mains: menuItem[];
  kids: menuItem[];
  drinks;
  wine: alcohol[];
  beer: alcohol[];
  cocktails: alcohol[];
  whisky: alcohol[];
  CONTENT;
  menuTitle;
  filters: string[] = [];
  testVar;

  constructor(private methodsService: MethodsService) {
    window.addEventListener('scroll', () => {this.methodsService.scroll()});
    
    this.menu = new Menu();
    this.starters = this.menu.starters;
    this.salads = this.menu.salads;
    this.pasta = this.menu.pasta;
    this.burgers = this.menu.burgers;
    this.mains = this.menu.mains;
    this.kids = this.menu.kids;

    this.drinks = new Drinks();
    this.wine = this.drinks.wine;
    this.beer = this.drinks.beer;
    this.cocktails = this.drinks.cocktails;
    this.whisky = this.drinks.whisky; 
   }

  ngOnInit(): void {
    this.methodsService.initPositions();
    this.showContent('starters');
    this.menuType(this.starters[0]);
  }

  showContent(name: string){
    this.menuTitle = name.toUpperCase();

    if(name == 'starters') {
      this.CONTENT = this.starters;
    } else if(name == 'salads'){
      this.CONTENT = this.salads;
    } else if(name == 'pasta'){
      this.CONTENT = this.pasta;
    } else if(name == 'burgers'){
      this.CONTENT = this.burgers;
      this.menuTitle = "BURGERS & SANDWICHES";
    } else if(name == 'mains'){
      this.CONTENT = this.mains;
    } else if(name == 'kids'){
      this.CONTENT = this.kids;
    } else if(name == 'wine'){
      this.CONTENT = this.wine;
    } else if(name == 'beer'){
      this.CONTENT = this.beer;
      this.menuTitle = "BEER & CIDER"
    } else if(name == 'cocktails'){
      this.CONTENT = this.cocktails;
    } else if(name == 'whisky'){
      this.CONTENT = this.whisky;
    }
  }

  menuType(instnce){
    if(instnce instanceof menuItem){
      return 'food';
    } else if(instnce instanceof alcohol){
      return 'drinks';
    }
  }

  filter(by: string){
    let f: string = by.toLowerCase();
    let b = document.getElementById(f);

    if(this.filters.includes(f)){
      for(let i=0; i < this.filters.length; i++){
        if(this.filters[i] === f){
          // filter was on, must be removed
          this.filters.splice(i, i+1);
          b.style.backgroundColor = "white";
          b.style.color = "black";
          this.showHide(f, false);
        }
      }
    } else {
      console.log("applying filter " + f)
      // add to array
      this.filters.push(f);
      b.style.backgroundColor = "black";
      b.style.color = "white";
      this.showHide(f, true);
    } 
  }

  showHide(cls, toggle) {
    let arr = Array.from(document.getElementsByClassName('foodItems'));
    arr.forEach(item => {
      if(toggle){
        if(!item.classList.contains(cls) && !item.classList.contains("hidden")){
          item.classList.add("hidden");
        } else {
          item.classList.remove("hidden");
        }
      }else{
        item.classList.remove("hidden");
      }
    });
  } 

  carryFilters(){
    let copy = this.filters.slice();
    console.log(copy);
    this.filters = [];
    copy.forEach(fltr => {
      this.filter(fltr);
    })
  }
}

