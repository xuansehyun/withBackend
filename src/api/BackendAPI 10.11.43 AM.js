function asJson (res) {
  return res.json();
}

export function manufactureList () {
  // return fetch(
  //   `https://api.github.com/repos/${ ownerRepoStr }`
  // )
  //   .then(asJson);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          "Aaa",
          "baa",
          "cdd",
        ],
      });
    }, 1500 * Math.random());
  });
}

export function deviceList () {
  // return fetch(
  //   `https://api.github.com/repos/${ ownerRepoStr }`
  // )
  //   .then(asJson);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          "iPhone 6",
          "iPhone 6s",
          "iPhone 6+",
        ],
      });
    }, 2000 * Math.random());
  });
}

export function createDevice (deviceObj) {
  // return fetch(
  //   `https://api.github.com/repos/${ ownerRepoStr }`
  // )
  //   .then(asJson);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: deviceObj,
      });
    }, 2000 * Math.random());
  });
}
