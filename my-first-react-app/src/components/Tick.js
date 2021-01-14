import React from 'react';

export function Tick() {
    const time = new Date().toLocaleTimeString();

    return (
        <span>{time}</span>
        )
}
