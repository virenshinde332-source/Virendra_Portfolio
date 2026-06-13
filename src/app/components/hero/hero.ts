import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  roles = [
    'Full Stack Java Developer',
    'UI Developer',
    'Angular Developer',
    'Frontend Developer',
    'Backend Developer',
    'web developer',
    'software developer',
  ];

  currentText = '';

  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect(): void {

    const currentRole = this.roles[this.roleIndex];

    if (!this.deleting) {

      this.currentText =
        currentRole.substring(0, this.charIndex + 1);

      this.charIndex++;

      if (this.charIndex > currentRole.length) {

        this.deleting = true;

        setTimeout(() => {
          this.typeEffect();
        }, 1500);

        return;
      }

    } else {

      this.currentText =
        currentRole.substring(0, this.charIndex - 1);

      this.charIndex--;

      if (this.charIndex === 0) {

        this.deleting = false;

        this.roleIndex =
          (this.roleIndex + 1) % this.roles.length;
      }
    }

    this.cdr.detectChanges();

    setTimeout(
      () => this.typeEffect(),
      this.deleting ? 50 : 100
    );
  }
}