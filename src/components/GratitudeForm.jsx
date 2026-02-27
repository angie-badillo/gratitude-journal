import { useState } from 'react';

export default function GratitudeForm({ onSave }) {
  const [entry, setEntry] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!entry.trim()) return;
    onSave(entry.trim());
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="text-5xl mb-4">🌤️</div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Beautifully done.</h2>
        <p className="text-gray-500 text-sm">Your gratitude has been recorded for today.</p>
        <button
          onClick={() => { setEntry(''); setSubmitted(false); }}
          className="mt-6 text-blue-600 text-sm underline underline-offset-2 hover:text-blue-700 transition-colors cursor-pointer"
        >
          Add another entry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xl font-semibold text-gray-800 mb-1">
          What are you grateful for today?
        </label>
        <p className="text-sm text-indigo-900 mb-3">
          ✨ Try to include a <span className="font-semibold">specific example</span> — a moment, person, or detail that made it meaningful.
        </p>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="e.g. I'm grateful for my morning walk today — the sun came out just as I stepped outside and it made me feel calm before a busy day."
          rows={5}
          className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent resize-none transition"
        />
      </div>
      <button
        type="submit"
        disabled={!entry.trim()}
        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold py-3 rounded-xl transition-colors text-sm cursor-pointer disabled:cursor-default"
      >
        Save Today's Gratitude
      </button>
    </form>
  );
}
