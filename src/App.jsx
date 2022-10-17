import React from "react";
import { Analytics } from "./components/Analytics";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { NewsLetter } from "./components/NewsLetter";

export const App = () => {
  return (
    <div>
      {/* navbar */}
      <NavBar />
      {/* navbar */}
      {/* Home Page */}
      <Home />
      {/* analytics */}
      <Analytics />
      {/* news letter */}
      <NewsLetter />
      {/* card */}
      <Card />
      {/* Footer */}
      <Footer />
      {/* Home Page */}
    </div>
  );
};
