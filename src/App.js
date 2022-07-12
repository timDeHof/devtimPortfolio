import React from 'react';
import { Routes, Route, Outlet, Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from './TIM-DEV.svg';
function App() {
  return (
    <main className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </main>
  );
}

const Navbar = () => {
  return (
    <nav className="border-b-[3px] pb-1 pl-1 bg-primary flex justify-between">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="p-4">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About Me
        </NavLink>
        <NavLink className="nav-link" to="/portfolio">
          Past Work
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </div>
      <Link to="/contact">
        <button className="container blue3">Contact me</button>
      </Link>
    </nav>
  );
};
const Home = () => {
  return (
    <div className="container p-1">
      <h1>Home</h1>
    </div>
  );
};
const About = () => {
  return (
    <>
      <h1>About Me</h1>
    </>
  );
};

const Portfolio = () => {
  return (
    <>
      <h1>Portfolio</h1>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
    </>
  );
};
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="container p-1 bg-green-700">
        <Outlet />
      </main>
    </>
  );
};
export default App;
