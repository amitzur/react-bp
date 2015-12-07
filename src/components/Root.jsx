import React from 'react';
import App from './App';

const store = {};

export default React.createClass({
    render: function() {
        return <App store={store}/>;
    }
});