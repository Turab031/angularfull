import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Controllflow } from './controllflow';

describe('Controllflow', () => {
  let component: Controllflow;
  let fixture: ComponentFixture<Controllflow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Controllflow],
    }).compileComponents();

    fixture = TestBed.createComponent(Controllflow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
