import { afterEach, beforeEach, describe, expect, test } from '@jest/globals';
import Aa from './a';

// Mock Functions

// Mock implementations

const myMockFn = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// > 'first call', 'second call', 'default', 'default'

//const myMockFn = jest
//  .fn()
//  .mockImplementationOnce(cb => cb(null, true))
//  .mockImplementationOnce(cb => cb(null, false));

//myMockFn((err, val) => console.log(val));
// > true

//myMockFn((err, val) => console.log(val));
// > false

//const myMockFn = jest.fn(cb => cb(null, true));
//myMockFn((err, val) => console.log(val));
// > true

// Mocking partials

//export const foo = 'foo';
//export const bar = () => 'bar';
//export default () => 'baz';
//
//test.js
//import defaultExport, {bar, foo} from '../foo-bar-baz';
//
//jest.mock('../foo-bar-baz', () => {
//  const originalModule = jest.requireActual('../foo-bar-baz');
//
//  //Mock the default export and named export 'foo'
//  return {
//    __esModule: true,
//    ...originalModule,
//    default: jest.fn(() => 'mocked baz'),
//    foo: 'mocked foo',
//  };
//});
//
//test('should do a partial mock', () => {
//  const defaultExportResult = defaultExport();
//  expect(defaultExportResult).toBe('mocked baz');
//  expect(defaultExport).toHaveBeenCalled();
//
//  expect(foo).toBe('mocked foo');
//  expect(bar()).toBe('bar');
//});

// Mocking modules

//import axios from 'axios';
//import Users from './users';
//
//jest.mock('axios');
//
//test('should fetch users', () => {
//  const users = [{name: 'Bob'}];
//  const resp = {data: users};
//  axios.get.mockResolvedValue(resp);
//
//  // or you could use the following depending on your use case:
//  // axios.get.mockImplementation(() => Promise.resolve(resp))
//
//  return Users.all().then(data => expect(data).toEqual(users));
//});

//const filterTestFn = jest.fn();
//
// Make the mock return `true` for the first call,
// and `false` for the second call
//filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
//
//const result = [11, 12].filter(num => filterTestFn(num));
//
//console.log(result);
// > [11]
//console.log(filterTestFn.mock.calls[0][0]); // 11
//console.log(filterTestFn.mock.calls[1][0]); // 12

// Mock return values

//const myMock = jest.fn();
//console.log(myMock());
// > undefined
//
//myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
//
//console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true

// .mock property

// The function was called exactly once
//expect(someMockFunction.mock.calls).toHaveLength(1);
//
// The first arg of the first call to the function was 'first arg'
//expect(someMockFunction.mock.calls[0][0]).toBe('first arg');
//
// The second arg of the first call to the function was 'second arg'
//expect(someMockFunction.mock.calls[0][1]).toBe('second arg');
//
// The return value of the first call to the function was 'return value'
//expect(someMockFunction.mock.results[0].value).toBe('return value');
//
// The function was called with a certain `this` context: the `element` object.
//expect(someMockFunction.mock.contexts[0]).toBe(element);
//
// This function was instantiated exactly twice
//expect(someMockFunction.mock.instances.length).toBe(2);
//
// The object returned by the first instantiation of this function
// had a `name` property whose value was set to 'test'
//expect(someMockFunction.mock.instances[0].name).toBe('test');

// The first argument of the last call to the function was 'test'
//expect(someMockFunction.mock.lastCall[0]).toBe('test');

//const myMock1 = jest.fn();
//const a = new myMock1();
//console.log(myMock1.mock.instances);
//// > [ <a> ]
//
//const myMock2 = jest.fn();
//const b = {};
//const bound = myMock2.bind(b);
//bound();
//console.log(myMock2.mock.contexts);
// > [ <b> ]

// foreach.js

//function forEach(items, callback) {
//    for (let inbox = 0, index < items.length; index++) {
//        callback(items[index]);
//    }
//}

// actual mock function forEach.test.ts

//import foreach from './foreach'
//
//const mockCallback = jest.fn(x => 42 + x);
//
//test('forEach mock function', () => {
//    forEach([0, 1], mockCallback);
//    // the mock function was called twice
//    expect(mockCallback.mock.calls).toHaveLength(2);
//    // The first argument of the first call to the function was 0
//    expect(mockCallback.mock.calls[0][0]).toBe(0);
//    // The first argument of the second call to the function was 1
//    expect(mockCallback.mock.calls[1][0]).toBe(1);
//    // the return value of the first call to the function was 42
//    expect(mockCallback.mock.results[0].value).toBe(2);
//});

// Setup and teardown

// Order of Execution

// to just run one test you use test.only:

//test.only('this will be the only test that runs', () => {
//  expect(true).toBe(false);
//});
//
//test('this test will not run', () => {
//  expect('A').toBe('A');
//});

//beforeEach(() => console.log('connection setup'));
//beforeEach(() => console.log('database setup'));
//
//afterEach(() => console.log('database teardown'));
//afterEach(() => console.log('connection teardown'));
//
//test('test 1', () => console.log('test 1'));
//
//describe('extra', () => {
//  beforeEach(() => console.log('extra database setup'));
//  afterEach(() => console.log('extra database teardown'));
//
//  test('test 2', () => console.log('test 2'));
//});

//describe('describe outer', () => {
//  console.log('describe outer-a');
//
//  describe('describe inner 1', () => {
//    console.log('describe inner 1');
//
//    test('test 1', () => console.log('test 1'));
//  });
//
//  console.log('describe outer-b');
//
//  test('test 2', () => console.log('test 2'));
//
//  describe('describe inner 2', () => {
//    console.log('describe inner 2');
//
//    test('test 3', () => console.log('test 3'));
//  });
//
//  console.log('describe outer-c');
//});


// Scoping

    // Applies to all tests in this file
//beforeEach(() => {
//  return initializeCityDatabase();
//});
//
//test('city database has Vienna', () => {
//  expect(isCity('Vienna')).toBeTruthy();
//});
//
//test('city database has San Juan', () => {
//  expect(isCity('San Juan')).toBeTruthy();
//});
//
//describe('matching cities to foods', () => {
//  // Applies only to tests in this describe block
//  beforeEach(() => {
//    return initializeFoodDatabase();
//  });
//
//  test('Vienna <3 veal', () => {
//    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
//  });
//
//  test('San Juan <3 plantains', () => {
//    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
//  });
//});

// One time setup
//
// it just change on the return compared to repeating setup
//
//beforeAll(() => {
//  return initializeCityDatabase();
//});
//
//afterAll(() => {
//  return clearCityDatabase();
//});
//
//test('city database has Vienna', () => {
//  expect(isCity('Vienna')).toBeTruthy();
//});
//
//test('city database has San Juan', () => {
//  expect(isCity('San Juan')).toBeTruthy();
//});

// Repeating Setup

//beforeEach(() => {
//    initializeCityDatabase();
//});
//
//afterEach(() => {
//    clearCityDatabase();
//});
//
//test('city database has Vienna', () => {
//    expect(isCity('Vienna')).toBeTruthy();
//});
//
//test ('city database has San Juan', () => {
//    expect(isCity('San Juan')).toBeTruthy();
//});

// on promise:

//afterEach(() => {
//    return initializeCityDatabase();
//});

// resolves / rejects

//test('the data is peanut butter', () => {
//    return expect(fetchData()).resolves.toBe('peanut butter');
//});
//
//test('the data is peanut butter', () => {
//    return expect(fetchData()).rejects.toMatch('peanut butter');
//});

// callbacks

//test('the data is peanut butter', done => {
//    function callback(error: Error, data: Promise<string>) {
//        if (error) {
//            done(error);
//            return;
//        }
//        try {
//            expect(data).toBe('peanut butter');
//            done();
//        } catch (error: unknown) {
//            done(error); 
//            }
//        }
//        fetchData(callback);
//    });


// async/await

//test('the data is peanut butter', async () => {
//  await expect(fetchData()).resolves.toBe('peanut butter');
//});
//
//test('the fetch fails with an error', async () => {
//  await expect(fetchData()).rejects.toMatch('error');
//});
//
//test('the data is peanut butter', async () => {
//    const data = await fetchData();
//    expect(data).toBe('peanut butter');
//});
//
//test('the fetch fails with an error', async () => {
//    expect.assertions(1);
//    try {
//        await fetchData();
//    } catch(e) {
//        expect(e).toMatch('error');
//    };
//    })


// Promises

//test('the data is peanut butter', () => {
//    return fetchData().then(data => {
//        expect(data).toBe('peanut butter');
//    })
//});


// Exceptions

// particular error of a function

//function compileAndroidCode() {
//    throw new Error('you are using the wrong JDK!');
//}
//
//test('compiling android goes as expected', () => {
//    expect(() => compileAndroidCode()).toThrow();
//    expect(() => compileAndroidCode()).toThrow(Error);
//    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
//    expect(() => compileAndroidCode()).toThrow(/JDK/);
//    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/);
//    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/);
//});

// Arrays and iterables

//const shoppingList = [
//    'diapers',
//    'kleenex',
//    'trash bags',
//    'paper towels',
//    'milk',
//];
//
//test('the shopping list has milk on it', () => {
//    expect(shoppingList).toContain('milk');
//    expect(new Set(shoppingList)).toContain('milk');
//});


// strings

//test('there is no I in team', () => {
//    expect('Team').not.toMatch(/I/);
//});
//
//test('but there is a "stop" in Christoph', () => {
//    expect('Christoph').toMatch(/stop/);
//});

// numbers

// floating point equality

//test('adding floating point numbers', () => {
//    const value = 0.1 + 0.2;
//    expect(value).toBeCloseTo(0.3);
//});

//test('two plus one', () => {
//    const value = 2 + 2;
//    expect(value).toBeGreaterThan(3);
//    expect(value).toBeGreaterThanOrEqual(3.5);
//    expect(value).toBeLessThan(5);
//    expect(value).toBeLessThanOrEqual(4.5);
//    expect(value).toBe(4);
//    expect(value).toEqual(4);
//});


// truthiness
//test('null', () => {
//    const n = null;
//    expect(n).toBeNull();
//    expect(n).toBeDefined();
//    expect(n).not.toBeUndefined();
//    expect(n).not.toBeTruthy();
//    expect(n).toBeFalsy();
//});
//
//test('zero', () => {
//    const z = 0;
//    expect(z).not.toBeNull();
//    expect(z).toBeDefined();
//    expect(z).not.toBeUndefined();
//    expect(z).not.toBeTruthy();
//    expect(z).toBeFalsy();
//});
