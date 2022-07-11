import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
function App() {
  return (
    <main className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
