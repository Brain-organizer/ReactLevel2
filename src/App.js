import Router from './shared/Router';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
