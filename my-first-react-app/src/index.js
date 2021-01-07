import React from 'react';
import ReactDOM from 'react-dom';
//Parts
import {element as Name} from './components/Name';
import {element as Random} from './components/Random';

ReactDOM.render(
    <div>
        { Name }
        { Random }
    </div>,
    document.getElementById('name')
);
