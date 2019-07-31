import Config from "./config";
import axios from 'axios';

export default {
  /**
   * @param {*} data:  email and password
   * add user
   */
  addUser: body => {
    console.log("=====>>>>>>>>", body);
    const url = Config.baseurl + "addUser";
    return axios
      .post(url, body)
      .then(response => {
        return response;
      })
      .catch({ status: 500, message: "Internal Serevr Error" });
  },

  /**
   * @param {*} data:  email and password
   * login user
   */
  login: body => {
    const url = Config.baseurl + "login";
    return  axios.post(url, body)
    .then(response => {
        return response;
      })
      .catch({ status: 500, message: "Internal Serevr Error" });
  }
};
