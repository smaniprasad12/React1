import { Button } from '@mui/material';

const ButtonUI = (props)=>{

    return(
        <Button variant="contained" onClick={props.onClick}>{props.text}</Button>

    )
    
}

export default ButtonUI
