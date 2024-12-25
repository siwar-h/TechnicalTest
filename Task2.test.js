const { customSort } = require('./Task2');

describe('customSort', () => {
  it('should sort items in ascending order by value', () => {
    const items = [
      { name: 'orange', value: 10 },
      { name: 'apple', value: 5 },
      { name: 'banana', value: 5 },
      { name: 'pear', value: 10 },
    ];

    const expected = [
      { name: 'apple', value: 5 },
      { name: 'banana', value: 5 },
      { name: 'orange', value: 10 },
      { name: 'pear', value: 10 },
    ];

    expect(customSort(items, 'asc')).toEqual(expected);
  });

  it('should sort items in descending order by value', () => {
    const items = [
      { name: 'apple', value: 5 },
      { name: 'orange', value: 10 },
      { name: 'banana', value: 5 },
      { name: 'pear', value: 10 },
    ];

    const expected = [
      { name: 'orange', value: 10 },
      { name: 'pear', value: 10 },
      { name: 'apple', value: 5 },
      { name: 'banana', value: 5 },
    ];

    expect(customSort(items, 'desc')).toEqual(expected);
  });

  it('should handle items with equal values and sort by name', () => {
    const items = [
      { name: 'apple', value: 5 },
      { name: 'banana', value: 5 },
      { name: 'orange', value: 10 },
      { name: 'pear', value: 10 },
    ];

    const expectedAsc = [
      { name: 'apple', value: 5 },
      { name: 'banana', value: 5 },
      { name: 'orange', value: 10 },
      { name: 'pear', value: 10 },
    ];

    const expectedDesc = [
      { name: 'orange', value: 10 },
      { name: 'pear', value: 10 },
      { name: 'apple', value: 5 },
      { name: 'banana', value: 5 },
    ];

    expect(customSort(items, 'asc')).toEqual(expectedAsc);
    expect(customSort(items, 'desc')).toEqual(expectedDesc);
  });
});