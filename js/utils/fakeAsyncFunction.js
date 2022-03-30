/**
 * Fake async function (fetch API)
 * @param {function} callback
 * @param {number} time
 * @returns {CallbackFunction} callback()
 */
export const fakeAsyncFunction = (callback, time) => {
  return new Promise(() => {
    setTimeout(() => {
      callback();
    }, time);
  });
};
