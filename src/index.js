import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./Components/App/App";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { getDataYear } from './dataApi';

const initialState = {
    data: getDataYear()
}

function changeChartByPeriod(state = initialState, action) {
    console.log(action);
    if (action.type === 'changePeriod') {
        return {
            ...state,
            data: action.payload,
        };
    }
    return state;
}

const store = createStore(changeChartByPeriod);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

