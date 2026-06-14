import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  opengit() {
  window.open('https://github.com/virenshinde332-source/Book_Store', '_blank');
}

openDemo() {
  window.open('https://book-store-e176.onrender.com', '_blank');
}

opengit1() {
  window.open('https://github.com/virenshinde332-source/Grocery_Store', '_blank');
}

openDemo1() {
  window.open('https://grocery-store-blhp.onrender.com', '_blank');
}

opengit2() {
  window.open('https://github.com/virenshinde332-source/Virendra_Portfolio', '_blank');
}

openDemo2() {
  window.open('https://virendra-portfolio-virendra-shinde-s-projects.vercel.app/', '_blank');
}
}
