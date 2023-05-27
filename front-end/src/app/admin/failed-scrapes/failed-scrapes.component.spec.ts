import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedScrapesComponent } from './failed-scrapes.component';

describe('FailedScrapesComponent', () => {
  let component: FailedScrapesComponent;
  let fixture: ComponentFixture<FailedScrapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedScrapesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailedScrapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
