import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  HostListener
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Timeline } from './components/timeline/timeline';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Timeline,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  
  scrollProgress = 0;

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {}

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      AOS.init({
        duration: 1000,
        once: false,
        offset: 100
      });

    }

  }
  @HostListener('document:mousemove', ['$event'])
onMouseMove(event: MouseEvent) {

  if (!isPlatformBrowser(this.platformId)) {
    return;
  }

  const glow =
    document.querySelector('.cursor-glow');

  const cursor =
    document.querySelector('.custom-cursor');

  const dot =
    document.querySelector('.cursor-dot');

  if (glow instanceof HTMLElement) {

    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;

  }

  if (cursor instanceof HTMLElement) {

    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

  }

  if (dot instanceof HTMLElement) {

    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;

  }

}

@HostListener('window:scroll')
onScroll() {

  const winScroll =
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  this.scrollProgress =
    (winScroll / height) * 100;

  const progressBar =
    document.querySelector('.progress-bar') as HTMLElement;

  if (progressBar) {

    progressBar.style.width =
      `${this.scrollProgress}%`;

  }

}


}