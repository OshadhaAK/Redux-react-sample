import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Components/Login';

const App = () => {
  // const user = useSelector(selectUser);

  return (
    <div className="App">
      <Login />
    </div>
  );
};

export default App;
