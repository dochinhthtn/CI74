import React from "react";

export default function TestComponent({ children }) {
    console.log(children);

    return (<div className="test-component">
        <h1>Render children</h1>
        {children}
    </div>);
}