import React, { useState } from 'react';
import CountDown from './CountDown';

import TestContext from './TestContext';
import TestList from './TestList';

import testData from "../../data/test_data";
import MainContent from './MainContent';

export default function QuizApp() {

    const [data, setData] = useState(testData);
    const [currentTest, setCurrentTest] = useState(null);

    const doTest = (test) => {
        setCurrentTest(test)
    }
    const store = { data: data, currentTest: currentTest, doTest: doTest };

    return (
        <TestContext.Provider value={store}>
            <div className="quiz-app">
                <h1>Quiz App</h1>
                <CountDown maxSeconds={3} onStop={() => { }} />
                <MainContent />
            </div>
        </TestContext.Provider>
    );
}