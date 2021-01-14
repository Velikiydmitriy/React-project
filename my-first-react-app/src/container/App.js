import React from 'react';
//Parts
import { Tick } from '../components/Tick';
import { Name } from '../components/Name';
export function App() {
    return (
        <header>
            <Name />
            <Tick />
        </header>
    )
}