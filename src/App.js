import Home from './pages/Home/index';
import Fitness from './pages/Fitness/index';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-yellow-js">
      <Header />
      <main className='bg-black-js text-white '>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blog/fitness' element={<Fitness />}></Route>
          <Route path='*' element={<h1>Page not found</h1>}></Route>
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
