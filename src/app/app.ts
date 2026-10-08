import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
// import { Shop } from './services/shop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // shop = inject(Shop);
}