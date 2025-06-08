import Image from 'next/image';

const newsArticles = [
  {
    id: 1,
    title: 'New Marine Technology Innovation',
    date: '2024-03-15',
    excerpt: 'Introducing our latest breakthrough in marine development technology...',
    imageUrl: '/ship.jpg',
  },
  {
    id: 2,
    title: 'Sustainable Ocean Development',
    date: '2024-03-10',
    excerpt: 'Our commitment to sustainable marine development practices...',
    imageUrl: '/ship2.jpg',
  },
  {
    id: 3,
    title: 'Industry Partnership Announcement',
    date: '2024-03-05',
    excerpt: 'DevMarine partners with leading marine research institution...',
    imageUrl: '/ship3.jpg',
  },
  {
    id: 4,
    title: 'Marine Safety Standards Update',
    date: '2024-02-28',
    excerpt: 'New safety protocols implemented across all marine development projects...',
    imageUrl: '/ship4.jpg',
  },
];

export default function News() {
  return (
    <main className="min-h-screen bg-sky-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* <h1 className="text-4xl font-bold text-sky-900 mb-10 text-center">Latest News</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 pt">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-sky-900/90 text-white">
                <time className="text-sm text-sky-200">{article.date}</time>
                <h2 className="text-2xl font-semibold mt-2 mb-3">{article.title}</h2>
                <p className="text-sky-100">{article.excerpt}</p>
                <button className="mt-4 inline-block text-orange-400 hover:text-orange-300 transition-colors">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
