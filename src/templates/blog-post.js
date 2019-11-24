import React from 'react'
import {Link, graphql} from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {rhythm, scale} from '../utils/typography'
import styled from '@emotion/styled'
import {
  mediumHeadingStyle,
  smallHeadingStyle,
  bigContentStyle,
  mediumContentStyle,
  contentStyle,
  captionStyle,
  remCal,
} from '../components/typography'
import '../global-style.scss'

const Section = styled.section`
  font-size: 125%;
  p {
    ${contentStyle};
    margin-bottom: 1rem;
  }
  h1 {
    ${bigContentStyle};
    margin-top: ${remCal(56)};
    margin-bottom: ${remCal(12)};
  }
  h2 {
    ${mediumContentStyle};
    margin-top: ${remCal(24)};
    margin-bottom: ${remCal(8)};
  }
  ul,
  ol {
    ${contentStyle};
    padding-left: 1rem;
    margin-top: ${remCal(24)};
    margin-bottom: ${remCal(36)};

    ul,
    ol {
      margin: 0;
    }

    li {
      padding-left: 0.5rem;
    }
  }
`

const ArticleTitle = styled.h1`
  ${mediumHeadingStyle};
  margin-bottom: ${remCal(8)};
`
const ArticleSubTitle = styled.h2`
  ${smallHeadingStyle};
  margin-bottom: ${remCal(36)};
`
const PublishAt = styled.time`
  ${captionStyle};
  margin-bottom: ${remCal(8)};
`

const HR = styled.hr`
  height: 0;
  border: 1px solid #eaeaea;
  width: ${remCal(148)};
  margin-top: ${remCal(148)};
  margin-bottom: ${remCal(56)};
`
const Footer = styled.footer`
  margin-bottom: ${remCal(148)};
`
const EndingSection = ({author, authorDescription, avatarPathName}) => (
  <>
    <HR />
    <Footer>
      <Bio
        author={author}
        authorDescription={authorDescription}
        avatarPathName={avatarPathName}
      />
    </Footer>
  </>
)

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const {previous, next} = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <PublishAt>{post.frontmatter.date}</PublishAt>
            <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
            <ArticleSubTitle>{post.frontmatter.description}</ArticleSubTitle>
          </header>
          <Section dangerouslySetInnerHTML={{__html: post.html}} />
        </article>
        <EndingSection
          author={post.frontmatter.author}
          authorDescription={post.frontmatter.author_description}
          avatarPathName={post.frontmatter.avatar_path_name}
        />
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        author_description
        avatar_path_name
      }
    }
  }
`
