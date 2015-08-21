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
