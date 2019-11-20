import React from "react";
import "./css/App.css";
import Search from "./components/search";
import Results from "./components/results";
import Bookmarks from "./components/bookmarks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> search GitHub </h1>
        <Search />
      </header>
      <main className="App-main">
        <Results />
        <Bookmarks />
      </main>
    </div>
  );
}

export default App;
