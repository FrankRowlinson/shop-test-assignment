import axios, { AxiosError } from "axios";

const httpClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

httpClient.interceptors.response.use(undefined, async (error: AxiosError) => {
  switch (error.response?.status) {
    case 401: {
      return error.config;
    }
  }
  return Promise.reject(error);
});

export { httpClient };
