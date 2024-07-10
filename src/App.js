import React, { useState } from "react";
import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";
import WriteComponent from "./component/write/WriteComponent";

function App() {
  const [isWrite, setIsWrite] = useState(false);

  return (
    <div className="App">
      <Header />
      <Footer setIsWrite={setIsWrite} />
      {isWrite && <WriteComponent setIsWrite={setIsWrite} />}
    </div>
  );
}

export default App;
