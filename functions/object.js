function groupBy(array, key) {
  return array.reduce((group, element) => {
    const keyValue = element[key];
    return { ...group, [keyValue]: [...(group[keyValue] ?? []), element] };
  }, {});
}

export { groupBy };
