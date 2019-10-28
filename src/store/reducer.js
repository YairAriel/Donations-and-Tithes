const initialState = {
    itemId: null,
    amountType: 'amount',
    amountValue: 10,
    weightValue: '',
    fruits: false,
    vegs: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_ITEM': 
            return {
                ...state,
                itemId: action.selectedItem
            }
        case 'SET_AMOUNT_TYPE':
            return {
                ...state,
                amountType: action.amountType
            }
        case 'SET_AMOUNT_VALUE':
            return {
                ...state,
                amountValue: action.amountValue
            }
        case 'SET_WEIGHT_VALUE':
            return {
                ...state,
                weightValue: action.weightValue
            }
        case 'SET_FRUITS':
            return {
                ...state,
                fruits: action.isFruits
            }
        case 'SET_VEGS':
            return {
                ...state,
                vegs: action.isVegs
            }
        default: 
            return state;
    }
}

export default reducer;