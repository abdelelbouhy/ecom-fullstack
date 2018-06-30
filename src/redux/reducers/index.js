const productsList = (state = {data: []}, action) => {
    switch (action.type) {
        case 'UPDATE_PRODUCTS_LIST':
            return Object.assign({}, state, {
                data: action.payload
            });
        default:
            return state;
    }
};


const reducers = {
    productsList
};

export default reducers;
