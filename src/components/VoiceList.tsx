import React, { useState } from "react";

export const VoiceList: React.FC = () => {
  const voices = [
    { name: "Voice 1", thumbnail: "path_to_thm1.jpg" },
    { name: "Voice 2", thumbnail: "path_to_thm2.jpg" },
    { name: "Voice 3", thumbnail: "path_to_thm3.jpg" },
  ];

  const [filter, setFilter] = useState("");

  const filterVoice = voices.filter((voice) =>
    voice.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search Voice"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <div className="grid-cols-1  md:grid-cols-2 gap-4">
        {filterVoice.map((voice, index) => {
          /*  normally i dont use index for key but to be fast i used it. I would use  for id generated  uuid npm package */
          return (
            <div key={index} className="border p-4 mb-2">
              <img src={voice.thumbnail} alt={voice.name} className="mb-5" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
