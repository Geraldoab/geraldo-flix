import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureProfileComponent } from './picture-profile.component';

describe('PictureProfileComponent', () => {
  let component: PictureProfileComponent;
  let fixture: ComponentFixture<PictureProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PictureProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
