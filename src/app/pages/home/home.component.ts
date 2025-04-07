import {Component, NgIterable, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {

  articles = [
    {
      id: 1,
      photoCover: 'https://i0.wp.com/nikke.gg/wp-content/uploads/Developers-Note-1.jpg',
      cardTitle: 'March 2025 Developer’s Note',
      cardDescription:
        'The second developer’s notes of this year are out, acknowledging the shortcoming of resource acquisition and providing more opportunities to aquire more. Pass costume reruns will be properly starting in April, now with a proper plan for the future. And most important: Union Raid changes!',
    },
    {
      id: 2,
      photoCover: 'https://i0.wp.com/nikke.gg/wp-content/uploads/Bild_2025-04-07_084619749.png',
      cardTitle: 'Nikke 2.5 Anniversary Livestream',
      cardDescription:'Nikke 2.5 Anniversary Livestream, will be streamed in few days, stay tunned to no lost the news'
    },
    {
      id: 3,
      photoCover: 'https://i0.wp.com/nikke.gg/wp-content/uploads/Stellar-Blade-x-Goddess-of-Victory-Nikke-DLC-Collaboration-Coming-in-June.jpg',
      cardTitle: 'Stellar Blade x Goddess of Victory – Nikke DLC Collaboration Coming in June',
      cardDescription:''
    },
    {
      id: 4,
      photoCover: 'https://i0.wp.com/nikke.gg/wp-content/uploads/Notice_Emu.jpg?w=1920&ssl=1',
      cardTitle: 'April 10 Update Patch Notes',
      cardDescription:''
    },
    {
      id: 5,
      photoCover: 'https://i0.wp.com/nikke.gg/wp-content/uploads/Notice_Emu.jpg?w=1920&ssl=1',
      cardTitle: 'March 10 Update Patch Notes',
      cardDescription:''
    },
    // ... mais artigos
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
