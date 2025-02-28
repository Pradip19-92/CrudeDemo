import axios from "axios";

const API = "http://localhost:3000/users";

async function getData() {
  return await axios.get(API);
}


async function postData(obj){
    await axios.post(API, obj)
}

export { getData, postData };