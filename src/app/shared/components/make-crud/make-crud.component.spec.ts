import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeCrudComponent } from './make-crud.component';

describe('MakeCrudComponent', () => {
  let component: MakeCrudComponent;
  let fixture: ComponentFixture<MakeCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
