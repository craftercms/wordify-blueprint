import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTaxonomiesComponent } from './sidebar-taxonomies.component';

describe('SidebarTagsComponent', () => {
  let component: SidebarTaxonomiesComponent;
  let fixture: ComponentFixture<SidebarTaxonomiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarTaxonomiesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarTaxonomiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
