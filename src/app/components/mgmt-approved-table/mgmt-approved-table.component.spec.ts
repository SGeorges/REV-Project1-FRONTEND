import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgmtApprovedTableComponent } from './mgmt-approved-table.component';

describe('MgmtApprovedTableComponent', () => {
  let component: MgmtApprovedTableComponent;
  let fixture: ComponentFixture<MgmtApprovedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgmtApprovedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgmtApprovedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
