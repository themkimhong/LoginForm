import { ROUTE_API } from "./index.route";
import { myAxios } from "../config/axios.config";
import { InterfaceCustomHttp } from "../interface/http.global";

export interface UserInfoAll {
  email: "string";
  password: "string";
  role: "string";
  avatar: "string";
  phone_number: "string";
}

export const UserInfoAll = () => {
  return myAxios.get<InterfaceCustomHttp<UserInfoAll>>(ROUTE_API.INFO);
};
