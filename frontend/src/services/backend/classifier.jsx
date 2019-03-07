import { post, get } from "./base";
var FormData = require("form-data");

export const classify = async function(image) {
  try {
    const form = new FormData();
    form.append("image", image);
    console.log(image);
    let response = await post("/classify", form);
    return response;
  } catch (error) {
    throw error;
  }
};

export const connect = async function() {
  try {
    await get("/");
    return true;
  } catch (error) {
    return false;
  }
};
