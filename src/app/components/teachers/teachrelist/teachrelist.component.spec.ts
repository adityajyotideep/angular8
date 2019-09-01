import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachrelistComponent } from './teachrelist.component';

describe('TeachrelistComponent', () => {
  let component: TeachrelistComponent;
  let fixture: ComponentFixture<TeachrelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachrelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachrelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
