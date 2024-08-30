import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  weddingDate = new Date('2024-10-26T15:00:00').getTime(); // Updated date format to be correct
  timeLeft: any = {};
  displayCountdown = true;

  ngOnInit(): void {
    this.calculateTimeLeft();
    setInterval(() => {
      this.calculateTimeLeft();
    }, 1000);
  }

  calculateTimeLeft() {
    const now = new Date().getTime();
    const distance = this.weddingDate - now;

    if (distance <= 0) {
      this.displayCountdown = false;
      this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }; 
    } else {
      this.timeLeft = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    }
  }
}
