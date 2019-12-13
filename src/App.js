import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage';
import { getRole } from './Services/UserService';

function App() {
  return (
   <MainPage/>
  );
}

export default App;
