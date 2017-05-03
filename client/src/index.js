import React from 'react';
import {render} from 'react-dom';
import './global-style.css';
import Test from './component/test';

const frameworks = ['React', 'Preact', 'Vue', 'Angular', 'Ember'];
const mountNode = document.getElementById('root');

const text = [...frameworks, 'Mithril'].join(', ');
const App = () => (<div>{text}<br /><Test /></div>);

render(<App />, mountNode);
