import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarContentComponent } from './tool-bar-content.component';

describe('ToolBarContentComponent', () => {
  let component: ToolBarContentComponent;
  let fixture: ComponentFixture<ToolBarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolBarContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolBarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
