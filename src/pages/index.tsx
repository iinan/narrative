import React from 'react'
import { graphql } from 'gatsby'

import Layout from '@components/Layout'
import SEO from '@components/SEO'

import HomeHero from '../sections/home/Home.Hero'
import HomeAbout from '../sections/home/Home.About'
import HomeCallToAction from '../sections/home/Home.CallToAction'
import HomeTestimonial from '../sections/home/Home.Testimonial'
import HomeServices from '../sections/home/Home.Services'

/**
 * The home page of Narative.co!
 */
import { seo } from '../data/siteContent'

function IndexPage({ location }) {
  const contentful = { seo }
  const navConfig = {
    offset: true,
    fixed: true,
    theme: 'light',
  }

  return (
    <Layout nav={navConfig} location={location} background="#08080b">
      <>
        <SEO
          title={contentful.seo.title}
          description={contentful.seo.description}
          image={contentful.seo.image}
          pathname={location.pathname}
        />
        <HomeHero />
        <HomeAbout />
        <HomeServices />
        <HomeTestimonial />
        <HomeCallToAction />
      </>
    </Layout>
  )
}

export default IndexPage

