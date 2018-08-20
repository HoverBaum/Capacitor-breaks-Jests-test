import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { STORAGE_SERVICE_TOKEN } from './tokens';

const storageMock = {
  get: () => {},
  set: () => {},
}

describe('User Service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        // We now use the injection to to not import Capacitor dependencies at all.
        provide: STORAGE_SERVICE_TOKEN,
        useValue: storageMock
      }],
    });
  });

  it('should remember a user', () => {
    // This solution looses information about the storages type here.
    const storage = TestBed.get(STORAGE_SERVICE_TOKEN);
    const userService = new UserService(storage);
    const expectedUser = {name: 'Tester'};
    userService.setUser(expectedUser);

    expect(userService.getUser()).toEqual(expectedUser);
  })
})