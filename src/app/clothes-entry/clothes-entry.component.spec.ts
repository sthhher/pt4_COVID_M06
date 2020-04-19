/*   
  @name = clothes-entry Component Spec TS
  @author = Esther Vendrell
  @version = 0.0.1
  @description = Spec TS of the clothes-entry component
  @date = 19-04-2020 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesEntryComponent } from './clothes-entry.component';

describe('ClothesEntryComponent', () => {
  let component: ClothesEntryComponent;
  let fixture: ComponentFixture<ClothesEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
