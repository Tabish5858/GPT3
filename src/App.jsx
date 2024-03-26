import "./App.css";

import Article from "./components/article/Article";
import Cta from "./components/cta/Cta";
import Feature from "./components/feature/Feature";
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
      <Features/>
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
