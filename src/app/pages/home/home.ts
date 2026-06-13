import { Component } from '@angular/core';

import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';
import { Projects } from '../../components/projects/projects';
import { Timeline } from '../../components/timeline/timeline';
import { Contact } from '../../components/contact/contact';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,

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

  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}