import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoastersComponent } from './roasters.component';

describe('RoastersComponent', () => {
  let component: RoastersComponent;
  let fixture: ComponentFixture<RoastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoastersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
