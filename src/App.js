import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Header from './Pages/Home/Header';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Shared/Login';
import Register from './Pages/Shared/Register';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="/purchase/:productId" element={<Purchase></Purchase>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="register" element={<Register></Register>} />
      </Routes>
    </div>
  );
}

export default App;
