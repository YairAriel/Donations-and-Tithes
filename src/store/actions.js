export const setSelectedItem = selectedItem => {
    return {type: 'SET_SELECTED_ITEM', selectedItem}
}

export const setAmountType = amountType => {
    return {type: 'SET_AMOUNT_TYPE', amountType}
}

export const setAmountValue = amountValue => {
    return {type: 'SET_AMOUNT_VALUE', amountValue}
}

export const setWeightValue = weightValue => {
    return {type: 'SET_WEIGHT_VALUE', weightValue}
}

export const setFruits = isFruits => {
    return {type: 'SET_FRUITS', isFruits}
}

export const setVegs = isVegs => {
    return {type: 'SET_VEGS', isVegs}
}