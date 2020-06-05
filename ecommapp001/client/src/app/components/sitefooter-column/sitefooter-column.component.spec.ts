import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitefooterColumnComponent } from './sitefooter-column.component';

describe('SitefooterColumnComponent', () => {
  let component: SitefooterColumnComponent;
  let fixture: ComponentFixture<SitefooterColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitefooterColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitefooterColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
