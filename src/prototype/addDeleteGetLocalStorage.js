import encryptDcrypt from "./encryptDcrypt";

//dataObj = array and value
//name = name
//type = add - delete- remove - get
//addType = single - multiple

const addDeleteGetLocalStorage = (
  name,
  dataObj = {},
  type = "add",
  addType = "multiple"
) => {
  if (type == "add") {
    if (addType == "single") {
      // console.log("single ", name, " - ", dataObj)
      let en = encryptDcrypt(
        "en",
        typeof dataObj == "object" ? JSON.stringify(dataObj) : dataObj
      );
      localStorage.setItem(name, en);
    } else {
      // console.log("multiple ", name, " - ", dataObj)
      let getItem = localStorage.getItem(name);
      if (getItem != undefined) {
        let de = encryptDcrypt("de", getItem);
        let parse = JSON.parse(de);
        let a = Array.from(parse);
        a.push(dataObj);
        // console.log("add ", a);
        let t = encryptDcrypt("en", JSON.stringify(a));
        localStorage.setItem(name, t);
      } else {
        // console.log("add else ", dataObj);
        let en = encryptDcrypt("en", JSON.stringify([dataObj]));
        localStorage.setItem(name, en);
      }
    }
  } else if (type == "get") {
    try {
      let g = localStorage.getItem(name);
      let d = encryptDcrypt("de", g);
      return d;
    } catch (e) {
      return null;
    }
  } else if (type == "delete") {
    localStorage.removeItem(name);
  } else {
    // console.log("data obj remove  ", dataObj);

    let getItem = localStorage.getItem(name);
    if (getItem != undefined) {
      let de = encryptDcrypt("de", getItem);
      // console.log("de ",de);
      let parse = JSON.parse(de);
      let a = Array.from(parse);
      let l = [];
      a.forEach((obj) => {
        if (dataObj.id != obj.id) {
          l.push(obj);
        }
      });
      console.log("delete ", l);
      let t = encryptDcrypt("en", JSON.stringify(l));
      localStorage.setItem(name, t);
    } else {
      localStorage.removeItem(name);
    }
  }
};

export default addDeleteGetLocalStorage;
