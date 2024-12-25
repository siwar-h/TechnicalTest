const { mergeMaps, mapStatistics } = require('./Task1');
describe('mapStatistics', () => {
  it('should handle empty map', () => {
    const emptyMap = new Map();
    expect(mapStatistics(emptyMap)).toEqual({
      min: undefined,
      max: undefined,
      average: undefined,
      sum: 0,
    });
  });

  it('should calculate statistics correctly', () => {
    const map = new Map([['a', 5], ['b', 10], ['c', 15]]);

    expect(mapStatistics(map)).toEqual({
      min: 5,
      max: 15,
      sum: 30,
      average: 10,
    });
  });
});

describe('mergeMaps', () => {
  it('should merge two maps correctly', () => {
    const map1 = new Map([['a', 5], ['b', 10], ['c', 15]]);
    const map2 = new Map([['b', 20], ['c', 5], ['d', 10]]);
    
    const expected = new Map([
      ['a', 5],
      ['b', 30],
      ['c', 20],
      ['d', 10],
    ]);
    expect(mergeMaps(map1, map2)).toEqual(expected);
  });

  it('should handle empty maps', () => {
    const emptyMap = new Map();
    const map = new Map([
      ['a', 1],
      ['b', 2],
    ]);
    expect(mergeMaps(map, emptyMap)).toEqual(map);
    expect(mergeMaps(emptyMap, map)).toEqual(map);
  });
});