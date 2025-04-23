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
        <Route path="/login" element={<div>login page</div>}></Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
