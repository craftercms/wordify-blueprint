import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-bios',
  templateUrl: './sidebar-bios.component.html',
  styleUrls: ['./sidebar-bios.component.scss']
})
export class SidebarBiosComponent implements OnInit {
  @Input() bios;

  constructor() {
  }

  ngOnInit(): void {
  }

}
