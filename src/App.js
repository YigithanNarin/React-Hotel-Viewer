import React, { useEffect } from "react";
import "./App.css";

import AddHotel from "./components/addHotel";
import Sort from "./components/sort";

function App() {
  /*useEffect(() => {
        localStorage.setItem('hotels', JSON.stringify(hotels));
    }, []);*/

  return (
    <section className="container">
      <AddHotel />
      <Sort />
    </section>
  );
}

export default App;
