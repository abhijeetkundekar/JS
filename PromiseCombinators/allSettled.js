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
//all must be resolved otherwise error
Promise.allSettled([fetchUserData(), fetchAllData()])
  .then((results) => {
    console.log("fetch user ", results[0]);
    console.log("fetch all ", results[1]);
  })
  .catch((error) => {
    console.log("error thrown ", error);
  });
