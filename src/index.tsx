import ReactDOM from 'react-dom';
import './Index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './firebase/firebase';
import { store } from './store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root')
);
