import React from 'react'

import { MicrodataBreadcrumb } from '@components/Media'
import SEO from '@components/SEO'

import { IArticleNode } from '@typings'

// An SEO bomb we want to keep. This is another standard that's worth setting up.
export default ({ article, location }: { article: IArticleNode; location: Location }) => (
  <Microdata
    article={article}
    publicationLogo="/icons/icon-512x512.png"
    location={location}
    sectionName={article.title}
    sectionUrl={location.href}
  />
)

const Microdata = ({
  article: {
    canonical,
    title,
    excerpt,
    author,
    hero,
    postDate,
    backgroundImage,
    readingTime,
    path,
  },
  location,
  publicationLogo,
  sectionName,
  sectionUrl,
}: {
  article: IArticleNode
  location: Location
  publicationLogo: string
  sectionName: string
  sectionUrl: string
}) => {
  const parsedDate = postDate ? new Date(postDate) : null
  const isoDateStr = parsedDate && !Number.isNaN(parsedDate.getTime())
    ? parsedDate.toISOString()
    : undefined

  return (
    <>
      <MicrodataBreadcrumb
        levels={[
          {
            name: sectionName,
            item: sectionUrl,
          },
          { name: title, item: location.href },
        ]}
      />
      <SEO
        title={title}
        description={excerpt}
        image={backgroundImage && backgroundImage.seo ? backgroundImage.seo.src : undefined}
        canonical={canonical}
        pathname={path}
        readingTime={(readingTime && readingTime.text) || 'Read'}
        published={isoDateStr}
      >
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${location.href}"
            },
            "headline": "${title}",
            "image": "${hero && hero.Article__Hero ? hero.Article__Hero.src : ''}",
            "datePublished": "${isoDateStr}",
            "dateModified": "${isoDateStr}",
            "author": {
              "@type": "Person",
              "name": "${author ? author.name : 'Hopper Editors'}"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Hopper",
              "logo": {
                "@type": "ImageObject",
                "url": "${location.origin + publicationLogo}"
              }
            },
            "description": "${excerpt}"
          }
        `}
        </script>
      </SEO>
    </>
  )
}
