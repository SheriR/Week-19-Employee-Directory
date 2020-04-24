import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=50&nat=us";
//const APIKEY = "&apikey=trilogy";

export default {
  search: function () {
    return axios.get(BASEURL);
  },
};
//console.log(BASEURL);
