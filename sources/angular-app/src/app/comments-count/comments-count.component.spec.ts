import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsCountComponent } from './comments-count.component';

describe('CommentsCountComponent', () => {
  let component: CommentsCountComponent;
  let fixture: ComponentFixture<CommentsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
