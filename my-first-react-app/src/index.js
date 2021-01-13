import React from 'react';
import ReactDOM from 'react-dom';
//Parts

import {Tick} from './components/Tick';

setInterval(
    () => {
        ReactDOM.render(
            <Tick/>,
            document.getElementById('name')
        );
    },1000)

