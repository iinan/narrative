const metaImage = '/meta/narative-meta.jpg'

const seo = {
  title: 'Narative — Digital products for ambitious teams',
  description: 'Narative brings design, marketing and engineering expertise directly to your team.',
  image: metaImage,
}

const articles = [
  {
    id: 'local-article-1',
    slug: 'building-products-people-love',
    path: '/articles/building-products-people-love',
    title: 'Building products people love',
    excerpt: 'A practical perspective on turning ambitious ideas into useful, memorable digital products.',
    publicationDate: 'September 7, 2026',
    readingTime: { text: '5 min read' },
    author: { name: 'Narative' },
    backgroundColor: '#e4d9c8',
    backgroundImage: { fluid: '/articles/hero/articles-hero-typewriter.jpg' },
    hero: { Article__Featured: '/articles/hero/articles-hero-typewriter.jpg' },
    body: '<p>Great products balance a clear point of view with a deep understanding of the people using them.</p><p>We help teams move from first sketch to a confident launch with strategy, design and engineering working together.</p>',
    seo,
  },
]

module.exports = {
  seo,
  pages: {
    Home: { seo },
    Articles: { seo },
    Careers: { seo },
    Labs: { seo },
    NotFound: { seo },
  },
  articles,
}
