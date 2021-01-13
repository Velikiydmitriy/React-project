import React from 'react';

export function Tick() {
    const time = new Date().toLocaleTimeString();

    return <header>
        <h1>Velikiy Dmitriy</h1>
        <span>{time}</span>
    </header>
}

// export function tick() {
//     return (
//         <header>
//             <h1>Velikiy Dmitriy</h1>
//             <span>{new Date().toLocaleTimeString()}</span>
//         </header>
//     )
// }