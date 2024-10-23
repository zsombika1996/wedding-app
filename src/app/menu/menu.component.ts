import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menu = [
    {
      category: 'Húsok',
      items: [
        'Zöldfűszeres csirkemell sajtmártással',
        'Lecsós csirkecomb',
        'Spárgával töltött sertéskaraj',
        'BBQ dagadó',
        'Szaftos, fűszeres sertés oldalas'
      ]
    },
    {
      category: 'Köretek',
      items: [
        'Rizs',
        'Grillezett zöldségek',
        'Burgonya püré'
      ]
    },
    {
      category: 'Saláták',
      items: [
        'Majonézes kukorica saláta',
        'Kevert zöld saláta',
        'Savanyúság'
      ]
    },
    {
      category: 'Torták',
      items: [
        'Fekete Erdő',
        'Túrós barackos',
        'Mogyorós csokoládé',
        'Mangós kókuszos (mentes)',
      ]
    }
  ];
}
