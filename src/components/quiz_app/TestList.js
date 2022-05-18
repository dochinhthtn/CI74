import React, { useContext } from 'react';

import TestContext from './TestContext';

export default function TestList() {

    // const store = useContext(TestContext);
    // const data = store.data;
    // const doTest = store.doTest;

    const { data, doTest } = useContext(TestContext);

    return (<div className="test-list">
        {data.map(test => {
            return <div
                className="test-container"
                style={{ border: '1px solid black', marginBottom: '10px', padding: '10px' }}
                onClick={() => doTest(test)}
            >
                <b>Tên bài test: {test.name}</b><br />
                <i>Số câu hỏi: {test.questions.length}</i>
            </div>
        })}
    </div>);
}