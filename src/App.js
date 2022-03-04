import Home from './pages/Home/index';
import Fitness from './pages/Fitness/index';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="bg-yellow-js text-black-js min-h-screen">
      <Header />
      <div className='bg-black-js'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blog/fitness' element={<Fitness />}></Route>
          <Route path='*' element={<h1>Page not found</h1>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
