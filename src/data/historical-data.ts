// src/data/historicalData.ts
export interface HistoricalEntry {
    author: string;
    text: string;
    quote: string;
  }
  
  export const historicalData: HistoricalEntry[] = [
    {
      author: "Jordanes",
      text: "Getica",
      quote: "Beyond the Akacires … above the Pontus coast are the dwellings of the Bulgars..."
    },
    // Add more entries here
  ];
  