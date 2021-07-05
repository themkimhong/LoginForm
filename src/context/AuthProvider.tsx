import { UsbRounded } from "@material-ui/icons";
import { createContext, FC, useContext, useEffect, useState } from "react";
import { usersService } from "../services/user.service";
import { UserInfoAll } from "../services/info.service";

interface AuthContextInterface {
  token: string | null;
  userInfoData: UserInfoAll | undefined;
}
const AuthContext = createContext<AuthContextInterface | undefined>(undefined);
export const AuthProvider: FC = (props) => {
  const token = window.localStorage.getItem("token");
  const [userinfoData, setUserInfoData] = useState<UserInfoAll>();
  useEffect(() => {
    UserInfoAll().then((res) => {
      setUserInfoData(res.data.data);
    });
  }, [token]);
  return (
    <AuthContext.Provider value={{ token, userInfoData: userinfoData }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useGetInfo = () => {
  return useContext(AuthContext)?.userInfoData;
};
export const useGetAuthProvider = () => {
  return useContext(AuthContext);
};
