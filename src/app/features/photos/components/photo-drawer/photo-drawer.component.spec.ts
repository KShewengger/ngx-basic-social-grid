import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDrawerComponent } from './photo-drawer.component';

describe('PhotoDrawerComponent', () => {
  let component: PhotoDrawerComponent;
  let fixture: ComponentFixture<PhotoDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoDrawerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
