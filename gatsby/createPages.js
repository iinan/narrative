const path = require('path')
const { pages, articles } = require('../src/data/siteContent')

const templates = {
  articles: path.resolve('./src/templates/pages/articles.template.tsx'),
  article: path.resolve('./src/templates/posts/article.template.tsx'),
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.publicationDate) - new Date(a.publicationDate),
  )

  createPage({
    path: '/articles',
    component: templates.articles,
    context: {
      group: sortedArticles,
      additionalContext: { featured: sortedArticles.slice(0, 1) },
      seo: pages.Articles.seo,
    },
  })

  sortedArticles.forEach((article, index) => {
    const next = [sortedArticles[(index + 1) % sortedArticles.length]].filter(Boolean)

    createPage({
      path: article.path,
      component: templates.article,
      context: {
        article,
        slug: article.path,
        id: article.id,
        title: article.title,
        next,
        relateds: sortedArticles.filter(item => item.id !== article.id).slice(0, 3),
        seo: article.seo,
      },
    })
  })
}
