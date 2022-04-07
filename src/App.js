import logo from './logo.svg';
import './App.css';
import Header from  './components/header';
import Purpose from './components/purpose';
import Login from './components/login';
import Updates from './components/updates';
import SignUp from './components/signup';
import PokeSearch from './components/pokeSearch';

function App() {
  return (
   <>
   < Header />
   < Purpose />
   <PokeSearch />
   {/* < Login />
   < SignUp /> */}
   < Updates />
   </>
  );
}

export default App;
