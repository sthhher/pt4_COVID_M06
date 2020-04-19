/*   
  @name = Service Clothes SPEC TS
  @author = Esther Vendrell
  @version = 0.0.1
  @description = Spec TypeScript of the Service Clothes
  @date = 19-04-2020 */
  
import { TestBed } from '@angular/core/testing';

import { ClothesService } from './clothes.service';

describe('ClothesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClothesService = TestBed.get(ClothesService);
    expect(service).toBeTruthy();
  });
});
