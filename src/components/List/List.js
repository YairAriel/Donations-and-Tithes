import React, { useState, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import fruits from '../../data/fruits';
import vegetables from '../../data/vegetables';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    chip: {
        margin: '0 0 1vw 1vw'
    },
    avatar: {
        margin: 0
    }
}));

const List = props => {
    const classes = useStyles();

    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (props.resetSelected) {
            setSelected(null);
        }
    }, [props.resetSelected]);
    
    const selectItemHandler = (itemId, itemName) => {
        setSelected(itemId);
        props.onSelectedItem(itemName);
    }

    const listItems = props.items === 'fruits' ? [...fruits] : props.items === 'vegs' ? [...vegetables] : null;
    return (
        <ul>
            {listItems ? listItems.map(item => {
              return <Chip 
                        key={item.id} 
                        label={item.name}
                        className={classes.chip}
                        onClick={() => selectItemHandler(item.id, item.name)}
                        avatar={<Avatar src={item.img} className={classes.avatar}/>}
                        variant={item.id === selected ? "default" : "outlined"} />
            }) : null }
        </ul>
    );
}

export default List;
// 