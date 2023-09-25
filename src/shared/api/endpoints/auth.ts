import { httpClient } from "../http-client";
import { LoginUserDto, LoginUserResponse } from "../types/auth.types";
import { AUTH_API_URL, STORE_API_URL } from "../constants";

export const auth = {
  loginUser: async (
    data: LoginUserDto,
    toNextApi: boolean = false
  ): Promise<LoginUserResponse> => {
    const response = await httpClient({
      baseURL: toNextApi ? AUTH_API_URL : STORE_API_URL,
      method: "POST",
      url: toNextApi ? "" : "auth/login",
      data: JSON.stringify(data),
    });

    return response.data;
  },
};
