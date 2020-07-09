module.exports = (ms, callback) =>
  new Promise((resolve) =>
    setTimeout(() => {
      if (callback) callback();
      resolve(ms);
    }, ms)
  );
