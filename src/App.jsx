import { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import GratitudeForm from './components/GratitudeForm';
import QuoteOfDay from './components/QuoteOfDay';
import PastEntries from './components/PastEntries';

const STORAGE_KEY = 'gratitude_entries';

function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function App() {
  const [entries, setEntries] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  function handleSave(text) {
    const newEntry = {
      text,
      date: formatDate(new Date()),
    };
    setEntries((prev) => [...prev, newEntry]);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <header className="mb-8 text-center">
          <div className="text-4xl mb-3">💙</div>
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Gratitude Journal</h1>
          <p className="text-gray-400 text-sm mt-1">{formatDate(new Date())}</p>
        </header>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
          <GratitudeForm onSave={handleSave} />
          <QuoteOfDay />
        </div>

        <PastEntries entries={entries} />
      </div>
      <SpeedInsights />
    </div>
  );
}
