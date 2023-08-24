import { Navigate, Route, Routes } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import CreateEvent from "./components/CreateEvent";
import CreateMenu from "./components/CreateMenu";
import AddEvent from "./components/AddEvent";

function App() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className='App'>
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to='/' />}
        />
        <Route
          path='/register'
          element={!user ? <Register /> : <Navigate to='/login' />}
        />
        <Route path='/create-event' element={<CreateEvent />} />
        <Route path='/create-menu' element={<CreateMenu />} />
        <Route path='/add-event' element={<AddEvent />} />
      </Routes>
    </div>
  );
}

export default App;
