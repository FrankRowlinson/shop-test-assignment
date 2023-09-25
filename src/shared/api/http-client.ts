import axios from "axios";

const httpClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export { httpClient };
