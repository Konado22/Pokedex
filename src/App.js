import logo from './logo.svg';
import './App.css';
import Header from  './components/header';
import PokeSearch from './components/pokeSearch';
import {useState} from 'react'
import axios from 'axios';
function App() {
  return (
   <>
   < Header />
   <PokeSearch />
   </>
  );
}

export default App;
