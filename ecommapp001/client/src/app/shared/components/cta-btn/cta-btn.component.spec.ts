import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaBtnComponent } from './cta-btn.component';

describe('CtaBtnComponent', () => {
  let component: CtaBtnComponent;
  let fixture: ComponentFixture<CtaBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
