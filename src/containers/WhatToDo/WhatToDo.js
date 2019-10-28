import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import fruits from '../../data/fruits';
import vegetables from '../../data/vegetables';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Stages from '../../components/Stages/Stages';



const WhatToDo = props => {

    const state = useSelector(state => state);

    const itemToDisplay = state.fruits ?
     fruits.find(fruit => fruit.id === state.itemId) :
     vegetables.find(veg => veg.id === state.itemId);

    // const donationAmount = state.amountValue / 100;

    return(
        <div>
            {itemToDisplay ? 
                <>
                    <Box display="flex" justifyContent="center" mt={2}>
                        <Box ml={1} mt={-0.5}><Avatar alt="item" src={itemToDisplay.img} /></Box>
                        <Typography variant="h5" component="h1">
                            איך מעשרים {state.amountType === 'amount' ? 
                                `${state.amountValue} ${itemToDisplay.name}?` : 
                                `${state.weightValue ? state.weightValue : 0} ק"ג ${itemToDisplay.name}?`}
                        </Typography>    
                    </Box>
                    <Stages /> 
                </> : null
            }
        </div>   
    );
}

export default WhatToDo;