function asJson (res) {
  return res.json();
}

export function manufactureList () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          "Apple",
          "Samsung",
          "Xiaomi",
        ],
      });
    }, 1500 * Math.random());
  });
}

export function deviceList () {
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: deviceObj,
      });
    }, 2000* Math.random());
  });
}

export function createManufactureName (manufactureName) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: manufactureName,
      });
    }, 2000* Math.random());
  });
}
export function createDeviceName (manufactureName) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: deviceName,
      });
    }, 2000* Math.random());
  });
}
