import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTeaserComponent } from './item-teaser.component';

describe('ItemTeaserComponent', () => {
  let component: ItemTeaserComponent;
  let fixture: ComponentFixture<ItemTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemTeaserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
