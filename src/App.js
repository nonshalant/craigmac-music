import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components /Header/Header';
import Home from './components /Home/Home';
import Videos from './components /Videos/Videos';
import Music from './components /Music/Music';
import Footer from './components /Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/videos' element={<Videos />}></Route>
        <Route path='/music' element={<Music />}></Route>
      </Routes>
    </div>
  );
}

export default App;
