import React from "react";
// import About from "./container/About/About";
import { About, Skills, Footer, Header, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testmonials /> */}
      <Footer />
    </div>
  );
};

export default App;
