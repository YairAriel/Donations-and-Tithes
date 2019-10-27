import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
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
        margin: '.5vw 7vw 0 2vw',
        boxSizing: 'border-box'
    },
    unitsLabel: {
        marginRight: '2vw'
    },
    weightInput: {
        '& .MuiInput-root': {
            flexDirection: 'row-reverse'
        }
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

    const [amountType, setAmountType] = useState('amount');
    const [amountValue, setAmountValue] = useState(10);
    const [weightValue, setWeightValue] = useState(null);

    const setAmtTypeHandler = e => {
        setAmountType(e.target.value);
    }

    const setAmountValueHandler = (e, value) => {
        setAmountValue(value);
    }

    const weightValueHandler = e => {
        setWeightValue(e.target.value);
    }

    return (
        <div>
            <Typography variant="h5" component="h5">
                כמה?
            </Typography>
            <RadioGroup className={classes.group} value={amountType} onChange={setAmtTypeHandler}>
                <FormControlLabel className={classes.label} value="amount" control={<Radio color="primary" />} label="כמות" />
                <FormControlLabel className={classes.label} value="weight" control={<Radio color="primary" />} label="משקל" />
            </RadioGroup>
            {amountType === 'amount' ? 
            <div className={classes.slider}>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" 
                    defaultValue={amountValue} max={200} onChangeCommitted={setAmountValueHandler} />
                <Typography className={classes.unitsLabel} gutterBottom>יח'</Typography>
            </div> : 
            <Box display="flex" justifyContent="center">
                <TextField
                    className={classes.weightInput}
                    type="number"
                    value={weightValue}
                    onChange={weightValueHandler}
                    InputProps={{
                    startAdornment: <InputAdornment position="start">ק"ג</InputAdornment>,
                    }}
                />
            </Box>} 
            <Box my={2} display="flex" justifyContent="center">
                <Typography variant="h5" color="primary" gutterBottom>
                    {amountType === 'amount' ? 
                    `${amountValue} ${props.item}` : 
                    `${weightValue ? weightValue : 0} ק"ג ${props.item}`}
                </Typography>
            </Box>
        </div>
    )
}

export default Amount;