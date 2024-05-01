import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDrawerComponent } from './album-drawer.component';

describe('AlbumDrawerComponent', () => {
  let component: AlbumDrawerComponent;
  let fixture: ComponentFixture<AlbumDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumDrawerComponent]
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(AlbumDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
