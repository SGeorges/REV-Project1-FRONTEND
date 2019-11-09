import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgmtPendingTableComponent } from './mgmt-pending-table.component';

describe('MgmtPendingTableComponent', () => {
  let component: MgmtPendingTableComponent;
  let fixture: ComponentFixture<MgmtPendingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgmtPendingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgmtPendingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
