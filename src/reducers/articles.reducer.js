import * as types from '../actions/types';

const initialState = {
    byId: {},
    loading: false,
    error: null
}

// function articlesReducer(prevState = initialState, action) {
//     switch (action.type) {
        
//         case types.FETCH_ARTICLES_REQUEST: {
//             const newState = Object.assign({}, prevState, {
//                 loading: true
//             });
//             return newState;
//         }
//         case types.FETCH_ARTICLES_SUCCESS: {
//             const newState = Object.assign({}, prevState, {
//                 loading: false,
//                 byId: normaliseData(action.data)
//             });
//             return newState;
//         }
//         case types.FETCH_ARTICLES_ERROR: {
//             const newState = Object.assign({}, prevState, {
//                 loading: false,
//                 error: action.data
//             });
//             return newState;
//         }
//         default: {
//             return prevState;
//         }
//     }
// }




export function articlesReducer(prevState = initialState, action) {
    const newState = Object.assign({}, prevState);

    if (!action) return newState;
    
    if (action.type === types.FETCH_ARTICLES_REQUEST) {
        // newState.loading = true;
        const newState = Object.assign({}, prevState, {
                loading: true
            });
        
    }

    if (action.type === types.FETCH_ARTICLES_SUCCESS) {
        return Object.assign({}, prevState, {
            byId: normaliseData(action.data),
            loading: false
        });
        
    }

    return newState;
}
    // if (action.type === types.FETCH_ARTICLES_ERROR) {
    //     return Object.assign({}, prevState, {
    //         error: action.error
    //     });
    // }
//     const newState = Object.assign({}, prevState);

//   switch (action.type) {
//     case types.FETCH_ARTICLES_REQUEST:
//       newState.loading = true;
//       return newState;

//     default:
//       return newState;
//   }
// }

function normaliseData(data) {
    return data.reduce((acc, item) => {
        acc[item._id] = item;
        return acc;
    }, {});
}