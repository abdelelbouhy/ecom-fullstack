import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import reducers from '../redux/reducers';
import routes from '../routes';


const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
);
const history = syncHistoryWithStore(browserHistory, store);

require('offline-plugin/runtime').install();

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={history}/>
    </Provider>,
    document.getElementById('app')
);

if(module.hot) {
    module.hot.accept(
        <Provider store={store}>
            <Router routes={routes} history={history}/>
        </Provider>,
        document.getElementById('app')
    );
}