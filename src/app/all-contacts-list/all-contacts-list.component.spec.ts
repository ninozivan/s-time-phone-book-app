import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContactsListComponent } from './all-contacts-list.component';

describe('AllContactsListComponent', () => {
  let component: AllContactsListComponent;
  let fixture: ComponentFixture<AllContactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllContactsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
