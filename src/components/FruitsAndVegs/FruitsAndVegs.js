import React, { useState } from 'react';
import List from '../List/List';
import Amount from '../Amount/Amount';
import CalcBtn from '../CalcBtn/CalcBtn';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    subTitle: {
        margin: '3vw 0'
    },
    button: {
        width: '50%'
    }
}));

const FruitsAndVegs = () => {
    const classes = useStyles();

    const [fruits, setFruits] = useState(false);
    const [vegs, setVegs] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    const toggleFruits = () => {
        setFruits(true);
        setVegs(false);
        setSelectedItem('');
    }

    const toggleVegs = () => {
        setVegs(true);
        setFruits(false);
        setSelectedItem('');
    }

    const isSelectedItemHandler = itemName => {
        setSelectedItem(itemName);
    }

    return (
        <div style={{padding: '2vw'}}>
            <Typography variant="h5" component="h5" className={classes.subTitle}>
                מה מעשרים?
            </Typography>
            <Box display="flex" justifyContent="spaceBetween">
                <Button size="large" variant={fruits ? "contained" : "outlined"} 
                    className={classes.button} onClick={toggleFruits}>פירות
                </Button>
                <Button size="large" variant={vegs ? "contained" : "outlined"}
                    className={classes.button} onClick={toggleVegs}>ירקות
                </Button>
            </Box>
            <List 
                items={fruits ? 'fruits' : vegs ? 'vegs' : null}
                onSelectedItem={isSelectedItemHandler} resetSelected={selectedItem === ''} />
            {selectedItem !== '' ? 
                <Box>
                    <Amount item={selectedItem} />
                    <CalcBtn />
                </Box> : 
            null}
        </div>
    )
}

export default FruitsAndVegs;