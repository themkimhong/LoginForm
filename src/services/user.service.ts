import { ROUTE_API } from "./index.route";
import { myAxios } from "../config/axios.config";
import { BASE_API_ROUTE } from "../constant/app.constant";

export const usersService = () => {
  return myAxios.get(`${BASE_API_ROUTE}${ROUTE_API.USER}`);
};
