function asJson (res) {
  return res.json();
}

/*export function manufactureList () {
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
} */

const brandDevice = require("../data/brandDevice.json");

export function brandDeviceList () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: brandDevice,
      });
    }, 1500 * Math.random());
  });
}

export function createDeviceObject (deviceObj) {
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
export function createDeviceName (deviceName) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: deviceName,
      });
    }, 2000* Math.random());
  });
}
