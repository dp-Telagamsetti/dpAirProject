import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyRouter from './Router/Router';

import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducer from './Store/Reducer';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <MyRouter />
    </Provider>, document.getElementById('root'));


