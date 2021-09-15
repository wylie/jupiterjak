import React from "react";

import { HeroImage } from "./styled.js";

import jupiter from  "./assets/jupiter.png";

const App = () => {
  return (
    <HeroImage src={jupiter} alt="Jupiter Jak, Sales Czar to the Solar System" />
  )
};

export default App;
