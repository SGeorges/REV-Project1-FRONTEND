import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensetableComponent } from './expensetable.component';

describe('ExpensetableComponent', () => {
  let component: ExpensetableComponent;
  let fixture: ComponentFixture<ExpensetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
