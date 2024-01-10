import { createContext, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/navbar';
import { Outlet, Route, Routes } from 'react-router';
import Contact from './pages/Contact/Contact';
import Users from './pages/Users/Users';
import { Login } from './pages/Login/Login';
import useLogin from './hooks/useLogin';
import { userDetailsContext } from './context/userDetailsContext';


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
function App() {


  const { username } = useLogin()

  return (
    <userDetailsContext.Provider value={username}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </userDetailsContext.Provider>
  );
}

export default App;
