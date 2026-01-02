import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSubmitPopup } from './review-submit-popup';

describe('ReviewSubmitPopup', () => {
  let component: ReviewSubmitPopup;
  let fixture: ComponentFixture<ReviewSubmitPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewSubmitPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewSubmitPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
