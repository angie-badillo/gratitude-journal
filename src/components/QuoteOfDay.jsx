import { getQuoteOfDay } from '../data/quotes';

export default function QuoteOfDay() {
  const quote = getQuoteOfDay();

  return (
    <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mt-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-indigo-700 mb-2">
        Quote of the Day
      </p>
      <p className="text-gray-700 text-base italic leading-relaxed">
        "{quote.text}"
      </p>
      <p className="text-right text-sm text-indigo-800 font-medium mt-2">
        — {quote.author}
      </p>
    </div>
  );
}
