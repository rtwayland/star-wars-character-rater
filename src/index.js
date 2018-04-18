import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './components/Provider';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();

if (module.hot) {
	module.hot.accept();
}
