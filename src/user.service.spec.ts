import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { StorageService } from './storage.service';

describe('User Service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: StorageService,
        useClass: StorageService
      }],
    });
  });

  it('should remember a user', () => {
    const storage: StorageService = TestBed.get(StorageService);
    const userService = new UserService(storage);
    const expectedUser = {name: 'Tester'};
    userService.setUser(expectedUser);

    expect(userService.getUser()).toEqual(expectedUser);
  })
})