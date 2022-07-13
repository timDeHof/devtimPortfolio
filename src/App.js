import React, { useState } from 'react';
import { Routes, Route, Outlet, Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from './TIM-DEV.svg';
import { FaBars, FaUser, FaBook } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlineArticle } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </main>
  );
}

const Navbar = () => {
  const [togglerNav, setTogglerNav] = useState(false);
  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };
  return (
    <div className="flex items-center">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <nav className="h-auto md:h-24 p2 bg-blue2 max-w-6xl mx-auto pb-1 pl-1 flex justify-between md:items-center">
        <div className="nav-bar">
          <NavLink className="nav-link" to="/about" onClick={clickHandler}>
            <FaUser />
          </NavLink>
          <NavLink className="nav-link" to="/portfolio" onClick={clickHandler}>
            <FaBook />
          </NavLink>
          <NavLink className="nav-link" to="/blog" onClick={clickHandler}>
            <MdOutlineArticle />
          </NavLink>
          <NavLink className="nav-link" to="/contact" onClick={clickHandler}>
            <MdOutlineEmail />
          </NavLink>
        </div>
      </nav>
      <Link to="/contact">
        <button className="contact-btn">Hire me</button>
      </Link>
      <button className="hamburger" onClick={clickHandler}>
        {togglerNav ? <FaBars /> : <AiOutlineClose />}
      </button>
    </div>
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
const Blog = () => {
  return (
    <>
      <h1>Blog</h1>
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
