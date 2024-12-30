import React from "react";
import { useState } from "react";
import "./App.css";
import Details from "./components/Details";
import { Tiptap } from "./components/TipTap";
import Navbar from "./components/Navbar";

function App() {
  const [description, setDescription] = useState("");

  return (
    <>
    <Navbar/>
    <div className="App">
      <Tiptap setDescription={setDescription} />
      <Details description={description} />
    </div>
    </>
  );
}

export default App;
