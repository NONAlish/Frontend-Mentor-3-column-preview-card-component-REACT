import Main from "./Main";
import React from "react";
import './App.css'

function App() {
  return (
    <>
      <main className="main">
        <ul>
          <Main backgroundColor="#E28625" main_text="Sedans" text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip." button="Learn More" />
          <Main backgroundColor="#006971" main_text="SUVs" text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures." button="Learn More" />
          <Main backgroundColor="#004140" main_text="Luxury" text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. " button="Learn More" />
        </ul>
      </main>
    </>
  );
}

export default App;
