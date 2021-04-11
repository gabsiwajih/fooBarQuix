import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FooBarQuixService } from './foo-bar-quix.service';
import { Injector } from '@angular/core';
import { TestCase } from './model/test-case';
describe('FooBarQuixServiceTest', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FooBarQuixService,
        { provide: 'SERVER_URL', useValue: 'http://localhost:8080' },
      ],
    });
  });
  it('should request result from backend 1 should return 1', fakeAsync(
    inject(
      [HttpTestingController, FooBarQuixService, Injector],
      (httpMock: HttpTestingController, service: FooBarQuixService) => {
        const testCase: TestCase = {
          input: 1,
          output: '1 should return 1',
        };
        let result: any = { result: testCase.output };
        const path = 'http://localhost:8080/foo-bar-quix/' + testCase.input;
        const data = { result: testCase.output };
        const expected = { ...data };
        service
          .convertNumber(testCase.input)
          .subscribe((data) => (result = data));
        httpMock.expectOne(path).flush(data);
        tick();
        expect(result).toEqual(expected);
        httpMock.verify();
      }
    )
  ));
  it('should request result from backend 3 should return FooFoo', fakeAsync(
    inject(
      [HttpTestingController, FooBarQuixService, Injector],
      (httpMock: HttpTestingController, service: FooBarQuixService) => {
        const testCase: TestCase = {
          input: 3,
          output: '3 should return FooFoo',
        };
        let result: any = { result: testCase.output };
        const path = 'http://localhost:8080/foo-bar-quix/' + testCase.input;
        const data = { result: testCase.output };
        const expected = { ...data };
        service
          .convertNumber(testCase.input)
          .subscribe((data) => (result = data));
        httpMock.expectOne(path).flush(data);
        tick();
        expect(result).toEqual(expected);
        httpMock.verify();
      }
    )
  ));
});
