import React, { useState } from 'react';
import { Routes, Route, Outlet, Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from './Images/TIM-DEV.svg';
import {
  FaBars,
  FaUser,
  FaBook,
  FaRegEnvelope,
  FaNewspaper,
} from 'react-icons/fa';
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
  console.log(togglerNav);
  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };
  return (
    <nav className="h-auto md:h-24 p2 bg-blue2 max-w-6xl mx-auto pb-1 pl-1 flex justify-between md:items-center">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className={togglerNav ? 'flex flex-col gap-4 md:inline' : 'nav-bar'}>
        <NavLink className="nav-link" to="/about" onClick={clickHandler}>
          <FaUser />
        </NavLink>
        <NavLink className="nav-link" to="/portfolio" onClick={clickHandler}>
          <FaBook />
        </NavLink>
        <NavLink className="nav-link" to="/blog" onClick={clickHandler}>
          <FaNewspaper />
        </NavLink>
        <NavLink className="nav-link" to="/contact" onClick={clickHandler}>
          <FaRegEnvelope />
        </NavLink>
      </div>
      <Link to="/contact">
        <button className="contact-btn">Hire me</button>
      </Link>
      <button className="hamburger" onClick={clickHandler}>
        {togglerNav ? <FaBars /> : <AiOutlineClose />}
      </button>
    </nav>
  );
};
const Home = () => {
  return (
    <div className="container text-center p-1">
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
};
const About = () => {
  return (
    <section>
      <h1>About Me</h1>
    </section>
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
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default App;
