function fetchUserData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("fetching user data");
    }, 1000);
  });
}

function fetchAllData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("fetching All data");
    }, 1000);
  });
}

Promise.myAll = function (values) {
  const promise = new Promise(function (resolve, reject) {
    let total = 0;
    let result = [];
    values.forEach(function (item, index) {
      Promise.resolve(item)
        .then((data) => {
          total++;
          result[index] = data;
          if (total == values.length) resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
  return promise;
};
//all must be resolved otherwise error
Promise.myAll([fetchUserData(), fetchAllData()])
  .then((results) => {
    console.log("fetch user ", results[0]);
    console.log("fetch all ", results[1]);
  })
  .catch((error) => {
    console.log("error thrown ", error);
  });
