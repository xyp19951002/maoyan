import qs from "qs";
const prefix = "http://pudge.wang:3080/api";
const http = {
  get(url, params) {
    if (params) {
      url += "?";
      let arr = Object.keys(params);
      arr = arr.map(item => {
        return item + "=" + params[item];
      });
      url += arr.join("&");
    }
    return fetch(prefix + url)
      .then(response => response.json())
      .then(res => {
        if (res.status === 0) {
          return res;
        } else {
          console.log(res.msg);
        }
      });
  },
  post(url, params) {
    return fetch(prefix + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: qs.stringify(params)
    })
      .then(response => response.json())
      .then(res => {
        if (res.status === 0) {
          return res;
        } else {
          console.log(res.msg);
        }
      });
  }
};

export default http;
