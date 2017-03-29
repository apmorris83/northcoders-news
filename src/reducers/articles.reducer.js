import * as types from '../actions/types';

const initialState = {
    byId: {},
    loading: false,
    error: null
}

export function articlesReducer(prevState = initialState, action) {
    const newState = Object.assign({}, prevState);
    if (!action) return newState;

    if (action.type === types.FETCH_ARTICLES_REQUEST) {
        newState.loading = true;
    }

    if (action.type === types.FETCH_ARTICLES_SUCCESS) {
        return Object.assign({}, prevState, {
            loading: false,
            byId: normaliseData(action.data)
        });
    }
    if (action.type === types.FETCH_ARTICLES_ERROR) {
        error: action.error
    }
    return newState;
}

function normaliseData(arr) {
    return arr.reduce(function (acc, elem) {
        acc[elem._id] = elem;
        return acc;
    }, {});
}