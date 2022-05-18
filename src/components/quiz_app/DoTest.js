import React, { useContext } from "react";
import TestContext from "./TestContext";

export default function DoTest() {

    const { currentTest } = useContext(TestContext);

    return (<div className="do-test" style={{padding: '20px', marginBottom: '30px', border: '1px solid black'}}>
        {currentTest ? <h1>Làm bài test: {currentTest.name}</h1> : <h1>Hãy chọn 1 bài test</h1>}

    </div>);
}