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
    setTimeout(function () {
      reject("quickly rejected");
    }, 1500);
  });
}
//all must be resolved otherwise error
Promise.race([fetchUserData(), fetchAllData()])
  .then((results) => {
    console.log("fetch user ", results);
  })
  .catch((error) => {
    console.log("error thrown ", error);
  });
