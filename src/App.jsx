import "./App.css";

import Cta from "./components/cta/Cta";
import Navbar from "./components/navbar/Navbar";
import Brand from "./components/brand/Brand";

import { Footer, Blog, Possibility, WhatGPT3, Header } from "./containers";
import Features from "./containers/features/Features";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
