import { TestBed } from '@angular/core/testing';

import { ZomatoRestaurantService } from './zomato-restaurant.service';

describe('ZomatoRestaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZomatoRestaurantService = TestBed.get(ZomatoRestaurantService);
    expect(service).toBeTruthy();
  });
});
