// src/components/HistoricalEntry.tsx
import React from 'react';
import { HistoricalEntry } from '../data/historical-data';

interface Props {
  entry: HistoricalEntry;
}

const HistoricalEntryComponent: React.FC<Props> = ({ entry }) => (
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h2 className="text-xl font-bold">{entry.author}</h2>
    <h3 className="italic text-gray-600">{entry.text}</h3>
    <p className="mt-2 text-gray-700">{entry.quote}</p>
  </div>
);

export default HistoricalEntryComponent;
