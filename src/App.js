import {
  Navbar,
  Header,
  Brands,
  Features,
  Possibilities,
  CTA,
  Blog,
  WhatGPT3,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <div className="gradient__bg"></div>
      <div className="bg">
        <Navbar />
        <Header />
      </div>
      <Brands />
      <WhatGPT3 />
      <Features />
      <Possibilities />
      <CTA />
    </>
  );
}

export default App;
