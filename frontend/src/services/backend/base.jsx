import Axios from "axios";
import { BACKEND_API_URL } from "variables/app";

export const get = async function(route) {
  try {
    let response = await Axios.get(`${BACKEND_API_URL}${route}`);
    return response["data"];
  } catch (error) {
    throw error;
  }
};

export const post = async function(route, data) {
  try {
    let response = await Axios.post(`${BACKEND_API_URL}${route}`, data);
    return response["data"];
  } catch (error) {
    throw error;
  }
};

export const put = async function(route, data) {
  try {
    let response = await Axios.put(`${BACKEND_API_URL}${route}`, data);
    return response["data"];
  } catch (error) {
    throw error;
  }
};

export const remove = async function(route) {
  try {
    let response = await Axios.delete(`${BACKEND_API_URL}${route}`);
    return response["data"];
  } catch (error) {
    throw error;
  }
};
