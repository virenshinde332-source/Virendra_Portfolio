import {
  Component,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  activeSection = 'Hero';

  @HostListener('window:scroll')
  onScroll() {

    const sections = document.querySelectorAll('section');

    sections.forEach(section => {

      const top = window.scrollY;
      const offset = section.offsetTop - 150;
      const height = section.clientHeight;
      const id = section.getAttribute('id');

      if (
        top >= offset &&
        top < offset + height &&
        id
      ) {
        this.activeSection = id;
      }

    });

  }

}