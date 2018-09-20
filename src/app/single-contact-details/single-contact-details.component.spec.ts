import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleContactDetailsComponent } from './single-contact-details.component';

describe('SingleContactDetailsComponent', () => {
  let component: SingleContactDetailsComponent;
  let fixture: ComponentFixture<SingleContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleContactDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
