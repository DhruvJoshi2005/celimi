import React from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import EmailForm from "./components/EmailForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="main-content">
        <h1 className="brand-title">CELIMI BY - KANSIGHTS</h1>
        <p className="tagline">Style Meets Comfort</p>
        <h2 className="coming-soon">Coming Soon</h2>
        <EmailForm />
      </main>
      <Footer />
    </>
  );
}

export default App;