import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueItemComponent } from './venue-item.component';

describe('VenueItemComponent', () => {
  let component: VenueItemComponent;
  let fixture: ComponentFixture<VenueItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenueItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
