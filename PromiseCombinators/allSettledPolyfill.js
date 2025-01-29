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
    }, 2000);
  });
}

Promise.myAllSettled = function (values) {
  let promise = new Promise((resolve, reject) => {
    let total = 0;
    let results = [];
    values.forEach(function (item, index) {
      Promise.resolve(item)
        .then((data) => {
          console.log("data is ", data);
          results[index] = { status: "fulfilles", value: data };
        })
        .catch((error) => {
          results[index] = { status: "rejected", value: data };
        })
        .finally(() => {
          total++;
          if (total == values.length) resolve(results);
        });
    });
  });
  return promise;
};
Promise.allSettled1 = function (promises) {
  let mappedPromises = promises.map((p) => {
    return p
      .then((value) => {
        return {
          status: "fulfilled",
          value,
        };
      })
      .catch((reason) => {
        return {
          status: "rejected",
          reason,
        };
      });
  });
  return Promise.all(mappedPromises);
};
//all must be resolved otherwise error
Promise.allSettled1([fetchUserData(), fetchAllData()])
  .then((results) => {
    console.log("fetch user ", results[0]);
    console.log("fetch all ", results[1]);
  })
  .catch((error) => {
    console.log("error thrown ", error);
  });
