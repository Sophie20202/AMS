import Cookies from "js-cookie";

export enum AUTH_STORED_DATA {
  TOKEN = "token",
  USER = "user",
}

export const isAuthenticated = () => {
  return (
    Cookies.get(AUTH_STORED_DATA?.TOKEN) && Cookies.get(AUTH_STORED_DATA?.USER)
  );
};

export const getUser = () => {
  const user: any = Cookies.get(AUTH_STORED_DATA?.USER);
  return JSON.parse(user);
};
