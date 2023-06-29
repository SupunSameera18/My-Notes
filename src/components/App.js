import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

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
