import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveColumnsComponent } from './responsive-columns.component';

describe('ResponsiveColumnsComponent', () => {
  let component: ResponsiveColumnsComponent;
  let fixture: ComponentFixture<ResponsiveColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
