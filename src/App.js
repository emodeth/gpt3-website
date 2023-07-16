import {
  Navbar,
  Header,
  Brands,
  Feature,
  CTA,
  Blog,
  WhatGPT3,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brands />
    </>
  );
}

export default App;
