import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Note from "./components/Note";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
