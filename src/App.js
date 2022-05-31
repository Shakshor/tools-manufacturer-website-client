import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Home/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
