import React from "react";

import './style/App.css';
import AddItem from "./Components/AddItem";
import ListItems from "./Components/ListItems";

function App() {
  return (
    <div className="App">
       <AddItem />
       <ListItems />
    </div>
  );
}

export default App;