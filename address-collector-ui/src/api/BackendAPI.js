import {default as fetch} from "isomorphic-fetch";
// http://davidwalsh.name/fetch

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
  return fetch("https://survey-db.locarise.com/api/manufacturer")
    .then(res => res.json())
    .then(data => {
      // https://www.filepicker.io/api/file/a387PFXRVGKtJJx9oHRQ

      // return data;
      return [
        {
          id: 1,
          name: "Apple",
          devices: [
            {
              id: 2,
              name: "iPhone6"
            },
            {
              id: 3,
              name: "iPhone4s"
            }
          ]
        },
        {
          id: 2,
          name: "Samsung",
          devices: [
            {
              id: 4,
              name: "S3"
            },
            {
              id: 5,
              name: "S4"
            }
          ]
        }
      ]
    });
}

export function StoreList () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          "BC",
          "LB",
          "APPL",
        ],
      });
    }, 2000* Math.random());
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
