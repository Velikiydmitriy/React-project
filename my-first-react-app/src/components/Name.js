import React from 'react';
const formatName = (user) => `${user.first} ${user.last}`;
const data = {
    first: 'Dima',
    last: 'Velikiy'
};

export const element = <h2>{formatName(data)}</h2>;
