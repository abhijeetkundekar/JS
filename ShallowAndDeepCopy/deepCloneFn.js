function deepClone(obj) {
  if (typeof obj !== "object") return obj;

  if (obj instanceof Array) {
    let cloneArr = [];
    obj.forEach((item, index) => {
      cloneArr[index] = deepClone(item);
    });
    return cloneArr;
  }

  if (obj instanceof Function) {
    return obj.bind({});
  }

  if (obj instanceof Object) {
    let copy = {};
    for (let att in obj) {
      if (obj.hasOwnProperty(att)) {
        copy[att] = deepClone(obj[att]);
      }
    }
    return copy;
  }
  throw new Error("Unable to clone, Its type is not Supported");
}

let obj = {
  name: "amay",
  age: 15,
  Address: {
    addr1: { pin: 536541, near: "temple" },
    addr2: { pin: 536541, near: "Nucleas Mall" },
  },
  describe: function () {
    return "checking";
  },
  hobbies: ["chess", "cricket"],
};
console.log(" obj", obj.describe());

let cloneObj = deepClone(obj);
console.log("cloned obj", cloneObj.describe());
