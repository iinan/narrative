import React from 'react'
import { graphql } from 'gatsby'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Footer from '@components/Navigation/Navigation.Footer'

import CareersHero from '../sections/careers/Careers.Hero'
import CareersBody from '../sections/careers/Careers.Body'

import { seo, careers } from '../data/siteContent'

function CareersPage({ location }) {
  const contentful = { seo, careers }
  const pageBackground =
    'linear-gradient(rgb(9, 10, 12),rgb(17, 18, 22) 60%,#1a1e24 100%)'

  const navConfig = {
    offset: true,
    fixed: true,
    theme: 'light',
  }

  return (
    <Layout background={pageBackground} nav={navConfig}>
      <SEO
        title={contentful.seo.title}
        description={contentful.seo.description}
        image={contentful.seo.image}
        pathname={location.pathname}
      />
      <CareersHero />
      <CareersBody />
      <Footer />
    </Layout>
  )
}

export default CareersPage

