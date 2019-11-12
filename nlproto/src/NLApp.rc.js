var React=require('react');
var ReactDOM=require('react-dom');

import NLScreen from './components/NLScreen.js';
import store from './store.js';

ReactDOM.render(<NLScreen store={store}/>, document.getElementById('nl-app'));
