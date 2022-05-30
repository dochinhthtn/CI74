import React from 'react';
import CurrentProfile from './CurrentProfile';

export default function AsideLeft() {

    return (<div className="aside-left bg-white border-right">
        <h2>Aside left</h2>
        <CurrentProfile />
    </div>);
}