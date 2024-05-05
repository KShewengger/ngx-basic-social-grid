import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDrawerComponent } from './post-drawer.component';

describe('PostDrawerComponent', () => {
  let component: PostDrawerComponent;
  let fixture: ComponentFixture<PostDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDrawerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
