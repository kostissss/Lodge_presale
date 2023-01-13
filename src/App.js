import React from "react";
import Router from "./jsx/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/plugins.css";
import "./css/style.css";
import "./css/templete.css";
import { MoralisProvider } from "react-moralis";
import ManualHeader from "./jsx/element/ManualHeader";
import Index2 from "./jsx/pages/home2";
import BLACK from "./jsx/pages/MyComponent";
import { Snowfall } from "react-snowfall";

function App() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <div className="App">
        <BLACK />
      </div>
    </MoralisProvider>
  );
}

export default App;
