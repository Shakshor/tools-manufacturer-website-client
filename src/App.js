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
import RequireAdmin from './Pages/Shared/RequireAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Payment from './Pages/Dashboard/Payment';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/Shared/NotFound';



function App() {
  return (
    <div className='max-w-7xl mx-auto px-12 tools-section'>
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
          <Route index element={<MyProfile></MyProfile>} ></Route>
          <Route path='orders' element={<MyOrders></MyOrders>} ></Route>
          <Route path='review' element={<AddReview></AddReview>} ></Route>
          <Route path='payment/:id' element={<Payment></Payment>} ></Route>
          <Route path='addOrder' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>} ></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>} ></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>} ></Route>
          <Route path='manageOrders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>} ></Route>
        </Route>
        <Route path='myPortfolio' element={<MyPortfolio></MyPortfolio>} ></Route>
        <Route path="login" element={<Login></Login>} />
        <Route path="register" element={<Register></Register>} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
