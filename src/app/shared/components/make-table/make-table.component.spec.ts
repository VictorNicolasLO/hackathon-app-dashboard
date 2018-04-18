import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTableComponent } from './make-table.component';

describe('MakeTableComponent', () => {
  let component: MakeTableComponent;
  let fixture: ComponentFixture<MakeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
