import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPostsAsideComponent } from './recent-posts-aside.component';

describe('PopularPostsAsideComponent', () => {
  let component: RecentPostsAsideComponent;
  let fixture: ComponentFixture<RecentPostsAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecentPostsAsideComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPostsAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
