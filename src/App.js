import { Provider } from 'react-redux';
import './App.css';
import MainContent from './components/MainContent';
import TopBar from './components/TopBar';
import store from './thunk/store'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <TopBar/>
      <MainContent/>
    </div>
    </Provider>
  );
}

export default App;
