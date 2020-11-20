import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { IMAGE_BACKGROUND } from '../post-card/post-card.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() slider;
  constructor() {
  }
  public posts_o;
  public format;

  ngOnInit(): void {
    this.posts_o = this.slider.posts_o;
    this.format = IMAGE_BACKGROUND;

  }

  ngAfterViewInit(): void {
    // @ts-ignore
    $('.home-slider').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 10,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: true,
      autoplayHoverPause: true,
      items: 1,
      navText: ['<span class=\'ion-chevron-left\'></span>', '<span class=\'ion-chevron-right\'></span>'],
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 1,
          nav: false
        },
        1000: {
          items: 1,
          nav: true
        }
      }
    });
  }
}
