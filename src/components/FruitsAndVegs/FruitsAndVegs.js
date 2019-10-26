import React, { useState } from 'react';
import List from '../List/List';
import Amount from '../Amount/Amount';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
    const [isSelectedItem, setIsSelectedItem] = useState(false);

    const toggleFruits = () => {
        setFruits(true);
        setVegs(false);
    }

    const toggleVegs = () => {
        setVegs(true);
        setFruits(false);
    }

    const isSelectedItemHandler = () => {
        setIsSelectedItem(true);
    }

    return (
        <div style={{padding: '2vw'}}>
            <Typography variant="h5" component="h5" className={classes.title}>
                מה מעשרים?
            </Typography>
            <Grid container justify="space-between">
                <Button size="large" variant={fruits ? "contained" : "outlined"} 
                    className={classes.button} onClick={toggleFruits}>פירות
                </Button>
                <Button size="large" variant={vegs ? "contained" : "outlined"}
                    className={classes.button} onClick={toggleVegs}>ירקות
                </Button>
            </Grid>
            <List 
                items={fruits ? 'fruits' : vegs ? 'vegs' : null}
                onSelectedItem={isSelectedItemHandler} />
            {isSelectedItem ? <Amount /> : null}
        </div>
    )
}

export default FruitsAndVegs;