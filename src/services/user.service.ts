import axios from "axios";
import { ROUTE_API } from "./index.route";
import { PATH_ENUM } from "../router/path";
import { myAxios } from "../config/axios.config";

export const usersService = () => {
  return myAxios.get(ROUTE_API.USER);
};
