import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lamp } from './lamp';

describe('Lamp', () => {
  let component: Lamp;
  let fixture: ComponentFixture<Lamp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lamp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lamp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
