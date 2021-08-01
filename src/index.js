import reactDom from 'react-dom';
import App from './App';

import './index.css';

document.addEventListener('DOMContentLoaded', () => {

    const appDiv = document.createElement('div');
    document.body.appendChild(appDiv);
    reactDom.render(<App />, appDiv);

});