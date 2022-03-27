import Home from './pages/Home/index';
import Fitness from './pages/Fitness/index';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Philosophy from './pages/Philosophy';
import PageNotFound from './pages/Error';

function App() {
  return (
    <div className="bg-black-js text-white">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blog/fitness' element={<Fitness />}></Route>
            <Route path='/blog/philosophy' element={<Philosophy />}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
