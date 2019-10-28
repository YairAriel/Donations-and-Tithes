import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const CalcBtn = props => {
    return (
        <Button fullWidth variant="contained" color="primary" 
            onClick={props.clicked} size="large" startIcon={<MenuBookIcon />}>
            <Box mr={2}>מה עושים מכאן?</Box>
        </Button>

    );
}

export default CalcBtn;