import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slider from '@material-ui/core/Slider';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    group: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    label: {
        margin: '0'
    },
    slider: {
        display: 'flex',
        margin: '0 7vw 0 2vw',
        boxSizing: 'border-box'
    },
    unitsLabel: {
        marginRight: '2vw'
    }
}));


const PrettoSlider = withStyles({
    root: {
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -2,
      boxShadow: 'border-box',
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

const Amount = props => {
    const classes = useStyles();

    const [amountValue, setAmountValue] = useState('amount');

    const setAmtValueHandler = e => {
        setAmountValue(e.target.value);
    }

    return (
        <div>
            <Typography variant="h5" component="h5">
                כמה?
            </Typography>
            <RadioGroup className={classes.group} value={amountValue} onChange={setAmtValueHandler}>
                <FormControlLabel className={classes.label} value="amount" control={<Radio color="primary" />} label="כמות" />
                <FormControlLabel className={classes.label} value="weight" control={<Radio color="primary" />} label="משקל" />
            </RadioGroup>
            {amountValue === 'amount' ? 
            <div className={classes.slider}>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                <Typography className={classes.unitsLabel} gutterBottom>יח'</Typography>
            </div> : null}
        </div>
    )
}

export default Amount;