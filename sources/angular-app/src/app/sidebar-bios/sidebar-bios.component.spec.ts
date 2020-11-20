import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBiosComponent } from './sidebar-bios.component';

describe('SidebarBiosComponent', () => {
  let component: SidebarBiosComponent;
  let fixture: ComponentFixture<SidebarBiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarBiosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarBiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
