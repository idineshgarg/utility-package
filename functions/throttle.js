export function throttle(cb, timer) {
  let executing = false;

  return function (...props) {
    if (executing) {
      return;
    }
    executing = true;
    timer = setTimeout(() => {
      executing = false;
      cb(...props);
    }, timer);
  };
}
export { throttle };
