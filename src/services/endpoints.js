const profileBaseUrl = "http://us-central1-jozekoapp.cloudfunctions.net/api/";
export const endpoints = {
  LOGIN: "login",
  REGISTER: "register",
};

export const profileEndpoint = {
  GET_USER_ID: profileBaseUrl + "getUserID",
  GET_FULL_NAME: profileBaseUrl + "getFullName",
  GET_USER_NAME: profileBaseUrl + "getUsername",
  GET_EMAIL: profileBaseUrl + "getEmail",
};
