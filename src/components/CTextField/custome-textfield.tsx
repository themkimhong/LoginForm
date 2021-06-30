import { FilledTextFieldProps, TextField } from "@material-ui/core";
import { FC, Fragment } from "react";

export interface CustomeTextFieldProps extends FilledTextFieldProps {
  placeholder: string;
}

export const CustomeTextField: FC<CustomeTextFieldProps> = (props) => {
  return (
    <div>
      <TextField
        id="standard-basic"
        label={props.placeholder}
        style={{ width: "100%", paddin: "2" }}
        {...props}
        variant="filled"
      />
    </div>
  );
};
