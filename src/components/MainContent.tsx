import React, { useState } from "react";

const MainContent: React.FC = () => {
  const [text, setText] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("");
  const [loading, setLoading] = useState(false);

  const generateVoice = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Voice generated!"); // Mock api called
    }, 2000);
  };

  const voices = ["Voice1", "Voice2", "Voice3"];
  return (
    <main className="container	mx-auto p-4">
      <div className="mb-4">
        <input
          className="border-2"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <select
          value={selectedVoice}
          onChange={(e) => setSelectedVoice(e.target.value)}
        >
          {voices.map((voice, index) => {
            return <option key={index}>{voice}</option>;
          })}
        </select>
      </div>
      <div className="mb-5 p-4">
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={generateVoice}
        >
          {loading ? "Generating" : "Generate Voice"}
        </button>
      </div>
      <div>
        <audio controls>
          <source src="path_to_placeholder_audio.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </main>
  );
};

export default MainContent;
