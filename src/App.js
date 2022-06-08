import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Header from './Pages/Home/Header';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Shared/Login';
import Register from './Pages/Shared/Register';
import RequireAuth from './Pages/Shared/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import AddProduct from './Pages/Dashboard/AddProduct';
import Users from './Pages/Dashboard/Users';



function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="/purchase/:productId" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        } />
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>} ></Route>
          <Route path='profile' element={<MyProfile></MyProfile>} ></Route>
          <Route path='review' element={<AddReview></AddReview>} ></Route>
          <Route path='addOrder' element={<AddProduct></AddProduct>} ></Route>
          <Route path='users' element={<Users></Users>} ></Route>
        </Route>
        <Route path="login" element={<Login></Login>} />
        <Route path="register" element={<Register></Register>} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
