import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import './App.css';
import Layout from './autolayout/Layout';
import Home from './pages/Home/Home';
import Singup from './pages/components/singup/Singup';
import { ToastContainer } from 'react-toastify';
import Login from './pages/components/login/Login';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout></Layout>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/howto" element={<div>howto page</div>}></Route>
        <Route path="/courses" element={<div>courses page</div>}></Route>
        <Route path="/blog" element={<div>blog page</div>}></Route>
        <Route path="/products" element={<div>products page</div>}></Route>
        <Route path="/download" element={<div>download page</div>}></Route>
        <Route path="/signup" element={<Singup></Singup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Route>
    )
  );

  return (
    <div>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
