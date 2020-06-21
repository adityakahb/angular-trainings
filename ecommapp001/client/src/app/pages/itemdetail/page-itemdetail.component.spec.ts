import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageItemdetailComponent } from './page-itemdetail.component';

describe('PageItemdetailComponent', () => {
  let component: PageItemdetailComponent;
  let fixture: ComponentFixture<PageItemdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageItemdetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageItemdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
