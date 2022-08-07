import 'bootstrap/dist/css/bootstrap.min.css';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  const isAuth = localStorage.getItem('name');
  return <div className="App">{isAuth ? <ChatScreen /> : <LoginScreen />}</div>;
}

export default App;
