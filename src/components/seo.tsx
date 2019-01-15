import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'

// Copied from type definitions for react-helmet
type MetaProps = JSX.IntrinsicElements['meta']

export interface SEOProps {
  description?: string
  keywords?: string[]
  lang?: string
  meta?: MetaProps[]
  title: string
}

export const SEO: React.StatelessComponent<SEOProps> = ({
  description,
  keywords = [],
  lang = 'en',
  meta = [],
  title,
}) => (
  <StaticQuery
    query={graphql`
      query DefaultSEOQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description
      const metaTags: MetaProps[] = [
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: data.site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        ...meta,
      ]
      if (keywords.length > 0) {
        meta.push({
          name: 'keywords',
          content: keywords.join(', '),
        })
      }

      return (
        <Helmet
          htmlAttributes={{ lang }}
          meta={metaTags}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        />
      )
    }}
  />
)
