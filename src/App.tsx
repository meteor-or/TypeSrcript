import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { type } from "os";
import Nav from "./components/Nav";
import Viewer from "./components/Viewer";

function App() {
  return (
    <div className="App">
      <div className="grid-x">
        <div className="cell large-2">
          <aside
            style={{
              position: "fixed",
              borderRight: "1px solid white",
              height: "100%",
            }}
            className="fixed"
          >
            <Nav />
          </aside>
        </div>
        <div className="cell small-10 large-8">
          <main>
            <Viewer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
