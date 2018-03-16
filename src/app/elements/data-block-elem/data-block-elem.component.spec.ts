import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBlockElemComponent } from './data-block-elem.component';

describe('DataBlockElemComponent', () => {
  let component: DataBlockElemComponent;
  let fixture: ComponentFixture<DataBlockElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBlockElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBlockElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
