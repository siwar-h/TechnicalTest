function mapStatistics(map) {
  if (map.size === 0) {
    return { min: undefined, max: undefined, average: undefined, sum: 0 };
  }
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    let count = 0;

    for (let value of map.values()) {
      console.log(map.values())
      if (typeof value !== "number") {
        throw new Error("Map values must be numbers");
      }

      min = Math.min(min, value);
      max = Math.max(max, value);
      sum += value;
      count++;
    }

    const average = sum / count;
    console.log({ min, max, sum, average })

    return { min, max, sum, average };
}

function mergeMaps(map1, map2) {
  const mergedMap = new Map(map1);

  for (let [key, value] of map2) {
    if (mergedMap.has(key)) {
      mergedMap.set(key, mergedMap.get(key) + value);
    } else {
      mergedMap.set(key, value);
    }
  }
  return mergedMap;
}

module.exports = { mapStatistics, mergeMaps }; 
