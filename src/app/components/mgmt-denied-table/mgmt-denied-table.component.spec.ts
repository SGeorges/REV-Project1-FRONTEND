import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgmtDeniedTableComponent } from './mgmt-denied-table.component';

describe('MgmtDeniedTableComponent', () => {
  let component: MgmtDeniedTableComponent;
  let fixture: ComponentFixture<MgmtDeniedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgmtDeniedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgmtDeniedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
