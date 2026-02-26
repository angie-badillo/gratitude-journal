export const quotes = [
  { text: "Gratitude turns what we have into enough.", author: "Anonymous" },
  { text: "The root of joy is gratefulness.", author: "David Steindl-Rast" },
  { text: "Gratitude is the fairest blossom which springs from the soul.", author: "Henry Ward Beecher" },
  { text: "When you are grateful, fear disappears and abundance appears.", author: "Tony Robbins" },
  { text: "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.", author: "Melody Beattie" },
  { text: "Joy is the simplest form of gratitude.", author: "Karl Barth" },
  { text: "Develop an attitude of gratitude. Say thank you to everything that comes into your life.", author: "Brian Tracy" },
  { text: "Gratitude is not only the greatest of virtues, but the parent of all others.", author: "Cicero" },
  { text: "Be thankful for what you have; you'll end up having more.", author: "Oprah Winfrey" },
  { text: "Feeling gratitude and not expressing it is like wrapping a present and not giving it.", author: "William Arthur Ward" },
  { text: "Gratitude is a powerful catalyst for happiness.", author: "Amy Collette" },
  { text: "The more grateful I am, the more beauty I see.", author: "Mary Davis" },
  { text: "Start each day with a grateful heart.", author: "Anonymous" },
  { text: "Gratitude is the wine for the soul. Go on. Get drunk.", author: "Rumi" },
  { text: "Enough is a feast.", author: "Buddhist Proverb" },
  { text: "Thankfulness is the beginning of gratitude. Gratitude is the completion of thankfulness.", author: "Henri Frederic Amiel" },
  { text: "Wear gratitude like a cloak and it will feed every corner of your life.", author: "Rumi" },
  { text: "No duty is more urgent than giving thanks.", author: "James Allen" },
  { text: "A single grateful thought toward heaven is the most complete prayer.", author: "Gotthold Lessing" },
  { text: "Count your blessings, not your problems.", author: "Anonymous" },
  { text: "Gratitude unlocks the fullness of life.", author: "Melodie Beattie" },
  { text: "When I started counting my blessings, my whole life turned around.", author: "Willie Nelson" },
  { text: "Let us be grateful to people who make us happy.", author: "Marcel Proust" },
  { text: "Gratitude is the memory of the heart.", author: "Jean Baptiste Massieu" },
  { text: "What separates privilege from entitlement is gratitude.", author: "Brené Brown" },
  { text: "Gratitude is riches. Complaint is poverty.", author: "Doris Day" },
  { text: "The smallest act of kindness is worth more than the grandest intention.", author: "Oscar Wilde" },
  { text: "Things turn out best for people who make the best of the way things turn out.", author: "John Wooden" },
  { text: "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.", author: "Voltaire" },
  { text: "If the only prayer you ever say is thank you, that will be enough.", author: "Meister Eckhart" },
];

export function getQuoteOfDay() {
  const start = new Date(2024, 0, 1);
  const today = new Date();
  const dayIndex = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  return quotes[dayIndex % quotes.length];
}
