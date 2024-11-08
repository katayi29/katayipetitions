import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ViewAllPetitionsPage from "./pages/ViewAllPetitionsPage";
import CreatePetitionPage from "./pages/CreatePetitionPage";
import SearchPetitionsPage from "./pages/SearchPetitionsPage";
import PetitionDetailsPage from "./pages/PetitionDetailsPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ViewAllPetitionsPage />} />
        <Route path="/create" element={<CreatePetitionPage />} />
        <Route path="/petitions/search" element={<SearchPetitionsPage />} />
        <Route path="/petitions/:id" element={<PetitionDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
