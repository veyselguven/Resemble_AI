import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import MainContent from "./components/MainContent";
import { VoiceList } from "./components/VoiceList";

function App() {
  return (
    <div className="text-3xl font-bold underline">
      <Header />
      <MainContent />
      <VoiceList />
    </div>
  );
}

export default App;
