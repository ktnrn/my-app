import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero : Hero;

  constructor(private heroService: HeroService){}
  
  onSelect(selectedHero: Hero) : void {
    this.selectedHero = selectedHero;
  }
}