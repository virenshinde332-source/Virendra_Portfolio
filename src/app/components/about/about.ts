import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {

  projects = 0;
  technologies = 0;
  dedication = 0;

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.animateCounter('projects', 3, 500);

    this.animateCounter('technologies', 15, 1000);

    this.animateCounter('dedication', 100, 2000);
  }

  animateCounter(
    type: string,
    target: number,
    duration: number
  ) {

    let start = 0;

    const increment =
      target / (duration / 20);

    const timer = setInterval(() => {

      start += increment;

      if (start >= target) {

        start = target;

        clearInterval(timer);
      }

      switch(type){

        case 'projects':
          this.projects = Math.floor(start);
          break;

        case 'technologies':
          this.technologies = Math.floor(start);
          break;

        case 'dedication':
          this.dedication = Math.floor(start);
          break;
      }

      this.cdr.detectChanges();

    }, 20);
  }

}