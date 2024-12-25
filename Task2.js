function customSort(arr, order) {
  return arr.sort((a, b) => {
    if (order === 'asc') {
      if (a.value < b.value) return -1;
      if (a.value > b.value) return 1;
    } else if (order === 'desc') {
      if (a.value > b.value) return -1;
      if (a.value < b.value) return 1;
    }

    if (a.value === b.value) {
      return a.name.localeCompare(b.name);
    }

    return 0;
  });
}

module.exports = { customSort }; 
