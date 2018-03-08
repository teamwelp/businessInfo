import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Sidebar from './sidebar';

ReactDOM.render(<Header />, document.getElementById('businessInfoHeader'));
ReactDOM.render(<Sidebar />, document.getElementById('businessInfoSidebar'));
