import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-columns',
  templateUrl: './responsive-columns.component.html',
  styleUrls: ['./responsive-columns.component.scss']
})
export class ResponsiveColumnsComponent implements OnInit {
  @Input() model;

  constructor() { }

  ngOnInit(): void {
  }

}
