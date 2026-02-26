export default function PastEntries({ entries }) {
  if (entries.length === 0) return null;

  return (
    <div className="mt-10">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
        Past Entries
      </h3>
      <ul className="space-y-3">
        {entries.slice().reverse().map((entry, i) => (
          <li key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
            <p className="text-xs text-gray-400 mb-1">{entry.date}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{entry.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
