// src/App.tsx
import React from "react";
import HistoricalEntryComponent from "./components/historical-entry";
import { historicalData } from "./data/historical-data";
import EnergySpiralOfBulgarianAlphabet from "./components/EnergySpiralOfBulgarianAlphabet";

const App: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold my-6 text-center">
      Energy Spiral of the Bulgarian Alphabet
    </h1>
    <EnergySpiralOfBulgarianAlphabet />
    <h1 className="text-3xl font-bold mb-6 text-center">
      Historical References to Bulgars from ancient sources
    </h1>
    {historicalData.map((entry, index) => (
      <HistoricalEntryComponent key={index} entry={entry} />
    ))}
  </div>
);

export default App;
