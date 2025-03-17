import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    // Set token in Axios default headers
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    // Remove token from headers
    delete axios.defaults.headers.common["Authorization"];
  }
};
