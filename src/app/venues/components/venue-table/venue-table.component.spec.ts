import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueTableComponent } from './venue-table.component';

describe('VenueTableComponent', () => {
  let component: VenueTableComponent;
  let fixture: ComponentFixture<VenueTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenueTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
