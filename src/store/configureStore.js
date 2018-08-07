import { createStore , combineReducers, applyMiddleware, compose} from 'redux';
import expensesReducer from '../reducers/expenses.js'
import filtersReducer from '../reducers/filters.js'
import thunk from "redux-thunk";

//If the redux devtools dont exist we are going to use regular old compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses : expensesReducer,
            filters : filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))

        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        //Added for the redux-devtools extension support to work in chrome
    )
    return store;
}

//We have placed the store inside a default export function, so whenever we cann that function the store will be returned to us

