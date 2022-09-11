import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import BirthdayReminder from "./pages/Birthday Reminder/BirthdayReminder";
import Tours from "./pages/Tours/Tours";
import Reviews from "./pages/Reviews/Reviews";
import Accordion from "./pages/Accordion/Accordion";
import Menu from "./pages/Menu/Menu";
import Tabs from "./pages/Tabs/Tabs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/birthday-reminder" element={<BirthdayReminder />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/tabs" element={<Tabs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
