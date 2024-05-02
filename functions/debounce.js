function debounce(cb, timer) {
  let timer;
  return function (...props) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...props);
    }, timer);
  };
}
export default {
  debounce,
};
