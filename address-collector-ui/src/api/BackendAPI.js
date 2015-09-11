import {default as fetch} from "isomorphic-fetch";
// http://davidwalsh.name/fetch

// const HOST = "https://survey-db.locarise.com";
const HOST = "http://127.0.0.1:8016";

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

export function manufactureList () {
  return fetch("https://survey-db.locarise.com/api/manufacturer")
  //return fetch(`${ HOST }/api/manufacturer`)
    .then(res => res.json())
    .then(data => {

      return data.objects;
    });
}

export function deviceList () {
  return fetch("https://survey-db.locarise.com/api/device")
  //return fetch(`${ HOST }/api/device`)
    .then(res => res.json())
    .then(data => {
      return data.objects;
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
  return fetch("https://survey-db.locarise.com/api/mac_address", {
  //return fetch(`${ HOST }/api/mac_address`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // Here we map deviceObj to our database values
      address: deviceObj.macAddress,
      country_code: deviceObj.country,
      device_id: deviceObj.device,
    })
  })
    .then(res => res.json());
}

export function createManufactureName (manufactureName) {
  return fetch("https://survey-db.locarise.com/api/manufacturer", {
  //return fetch(`${ HOST }/api/manufacturer`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // Here we map deviceObj to our database values
      name: manufactureName,
    })
  })
    .then(res => res.json());
}
export function createDeviceName (manufacturerId, deviceName) {
  return fetch("https://survey-db.locarise.com/api/device", {
  //return fetch(`${ HOST }/api/device`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // Here we map deviceObj to our database values
      name: deviceName,
      manufacturer_id: manufacturerId,
    })
  })
    .then(res => res.json());
}
