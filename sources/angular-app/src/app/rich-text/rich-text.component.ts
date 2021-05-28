import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rich-text',
  template: `<div [innerHTML]="content_html"></div>`,
  styleUrls: ['./rich-text.component.scss']
})
export class RichTextComponent implements OnInit {
  @Input() model;
  public content_html;

  constructor() { }

  ngOnInit(): void {
    this.content_html = this.model.content_html;
  }

}
