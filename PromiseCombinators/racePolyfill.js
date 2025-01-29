function fetchUserData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("fetching user data");
    }, 3000);
  });
}

function fetchAllData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("fetching All data");
    }, 2000);
    setTimeout(function () {
      reject("quickly rejected");
    }, 1500);
  });
}

Promise.myRace = function (values) {
  return new Promise(function (resolve, reject) {
    if (values.length == 0) {
      throw new TypeError("cant perform Promise race on empty array");
    }
    values.forEach(function (promise, index) {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};
//all must be resolved otherwise error
Promise.myRace([fetchUserData(), fetchAllData()])
  .then((results) => {
    console.log("fetch user ", results);
  })
  .catch((error) => {
    console.log("error thrown ", error);
  });
