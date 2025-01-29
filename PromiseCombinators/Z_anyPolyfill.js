function resolveQuickly() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Resolved quickly"), 3000);
  });
}

function resolveSlowly() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Resolved slowly"), 2000);
  });
}

function rejectFast() {
  return new Promise((reject) => {
    setTimeout(() => reject(new Error("Rejected fast")), 320);
  });
}

function rejectSlowly() {
  return new Promise((reject) => {
    setTimeout(() => reject(new Error("Rejected slowly")), 1500);
  });
}

Promise.myAny = function (values) {
  return new Promise((resolve, reject) => {
    if (values.length == 0)
      reject(new AggregateError("No Promises were provided"));

    let rejectArr = [];
    let rejectCount = 0;
    values.forEach((item, index) => {
      Promise.resolve(item)
        .then(resolve)
        .catch((error) => {
          rejectArr[index] = error;
          rejectCount++;

          if (rejectCount === values.length)
            reject(new AggregateError(rejectArr, "All Promises were Rejected"));
        });
    });
  });
};
Promise.myAny([rejectFast(), rejectSlowly(), resolveQuickly(), resolveSlowly()])
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
    if (error instanceof AggregateError) {
      // Log each error individually
      error.errors.forEach((err, idx) =>
        console.log(`Error ${idx + 1}:`, err.message)
      );
    }
  });
