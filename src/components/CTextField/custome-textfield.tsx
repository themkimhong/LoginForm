import {  TextField } from '@material-ui/core'
import { FC,Fragment } from 'react'

export interface CustomeTextFieldProps {
    placeholder : string;

}

export const CustomeTextField:FC<CustomeTextFieldProps> = (props) => {
    return (
        <div >
            <TextField id="standard-basic" 
                label={props.placeholder} 
                style={{width:"100%"}} 
            />
        </div>
    );
};
