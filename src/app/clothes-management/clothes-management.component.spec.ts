/*   
  @name = clothes-management Component Spec TS
  @author = Esther Vendrell
  @version = 0.0.1
  @description = Spec TS of the clothes-management component
  @date = 19-04-2020 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesManagementComponent } from './clothes-management.component';

describe('ClothesManagementComponent', () => {
  let component: ClothesManagementComponent;
  let fixture: ComponentFixture<ClothesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
