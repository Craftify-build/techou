import React from 'react'
import {Link, graphql} from 'gatsby'
import styled from '@emotion/styled'

import SEO from '../components/seo'
import HeroSection from '../components/home/hero-section'
import {
  bigContentStyle,
  MediumContent,
  Caption,
  remCal,
} from '../components/typography'
import Footer from '../components/footer'
import '../global-style.scss'

const BlogPostContainer = styled.section`
  margin: ${remCal(92)} auto ${remCal(148)};
  max-width: ${remCal(680)};
  display: grid;
  grid-gap: ${remCal(36)};
`
const Article = styled.article`
  position: relative;
  transition: box-shadow 0.2s ease-in-out;
  padding: ${remCal(24)} ${remCal(32)};
  border-radius: ${remCal(4)};
  :hover {
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
  }
`
const BlogLink = styled(Link)`
  ${bigContentStyle};
  :hover {
    color: var(--grey-100);
  }
  ::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const isUnlisted = ({node}) =>
  /\/content\/blog\/_.+/.test(node.fileAbsolutePath)

class BlogIndex extends React.Component {
  render() {
    const {data} = this.props
    const posts = data.allMarkdownRemark.edges.filter(post => !isUnlisted(post))

    return (
      <>
        <SEO title="All posts" />
        <HeroSection />

        <BlogPostContainer>
          {posts.map(({node}) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Article key={node.fields.slug}>
                <header>
                  <Caption color="grey-200">{node.frontmatter.date}</Caption>
                  <BlogLink to={node.fields.slug}>{title}</BlogLink>
                </header>
                <section>
                  <MediumContent
                    color="grey-200"
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </Article>
            )
          })}
        </BlogPostContainer>
        <Footer />
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          fileAbsolutePath
        }
      }
    }
  }
`
