// src/components/HistoricalEntry.tsx
import React from "react";
import { HistoricalEntry } from "../data/historical-data";

interface Props {
  entry: HistoricalEntry;
}

const HistoricalEntryComponent: React.FC<Props> = ({ entry }) => (
  <div className="flex justify-between items-start bg-white shadow-md rounded-lg p-4 mb-4">
    {/* Text block */}
    <div className="flex-1 pr-4">
      <h2 className="text-xl font-bold">{entry.author}</h2>
      <p className="text-gray-600">{entry.text}</p>
      <h3 className="italic text-gray-700 font-bold">{entry.quote}</h3>
    </div>

    {/* Image block (only if imageUrl is provided) */}
    {entry.imageUrl && (
      <img
        src={entry.imageUrl}
        alt={`${entry.author} source`}
        className="w-24 h-24 object-cover rounded"
      />
    )}
  </div>
);

export default HistoricalEntryComponent;
