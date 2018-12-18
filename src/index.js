import React from 'react';
import { render } from 'react-dom';

const App = () => {
    return (
        <div> Hi there! </div>
    );
}

render(
    <App />,
    document.querySelector('#root')
);