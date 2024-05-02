function removeLogs() {
  console.countReset = () => {};
  console.debug = () => {};
  console.dir = () => {};
  console.dirxml = () => {};
  console.error = () => {};
  console.group = () => {};
  console.groupCollapsed = () => {};
  console.groupEnd = () => {};
  console.info = () => {};
  console.log = () => {};
  console.table = () => {};
  console.time = () => {};
  console.timeEnd = () => {};
  console.timeLog = () => {};
  console.timeStamp = () => {};
  console.trace = () => {};
  console.warn = () => {};
}

export default {
  removeLogs,
};
