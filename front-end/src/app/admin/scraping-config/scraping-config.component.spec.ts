import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapingConfigComponent } from './scraping-config.component';

describe('ScrapingConfigComponent', () => {
  let component: ScrapingConfigComponent;
  let fixture: ComponentFixture<ScrapingConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrapingConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrapingConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
