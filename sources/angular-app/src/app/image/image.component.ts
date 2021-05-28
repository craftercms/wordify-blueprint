import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  template: `<img src="{{image_s}}" alt="{{alternativeText_s || ''}}" class="img-fluid" />`,
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() model;
  public image_s;
  public alternativeText_s;

  constructor() { }

  ngOnInit(): void {
    this.image_s = this.model.image_s;
    this.alternativeText_s = this.model.alternativeText_s;
  }

}
