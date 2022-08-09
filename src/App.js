import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  const isLogged = useSelector((state) => {
    return state.login.isLogged;
  });
  return (
    <>
      {isLogged ? <ChatScreen /> : <LoginScreen />}
      {/* <ChatScreen /> */}
    </>
  );
}

export default App;
