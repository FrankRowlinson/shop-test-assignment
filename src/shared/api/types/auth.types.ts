export type LoginUserRequest = {
  username: string;
  password: string;
};

export type LoginUserResponse = {
  token: string;
};
