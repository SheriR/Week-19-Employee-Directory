// import axios from "axios";

// export default function getEmployee(query) {
//   const BASEURL = "https://randomuser.me/api/?results=50&nat=us";
//   return axios.get(BASEURL);
// }

import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=50&nat=us";
//const APIKEY = "&apikey=trilogy";

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  },
};
