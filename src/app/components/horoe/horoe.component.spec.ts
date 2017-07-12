import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroeComponent } from './horoe.component';

describe('HoroeComponent', () => {
  let component: HoroeComponent;
  let fixture: ComponentFixture<HoroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
