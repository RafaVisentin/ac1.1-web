import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showBanner: boolean = true;

  ngOnInit(): void {
    const savedBannerState = localStorage.getItem('showBanner');
    if (savedBannerState !== null) {
      this.showBanner = JSON.parse(savedBannerState);
    }
  }

  toggleBanner(): void {
    this.showBanner = !this.showBanner;
    localStorage.setItem('showBanner', JSON.stringify(this.showBanner));
    console.log('Banner visível?', this.showBanner);
  }
  
}
