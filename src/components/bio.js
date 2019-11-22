/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'

import styled from '@emotion/styled'
import {MediumContent, Caption, remCal} from './typography'

const BioContainer = styled.div`
  display: grid;
  grid-gap: ${remCal(36)};
  grid-template-columns: auto 1fr;
  background: #fafafa;
  border-radius: ${remCal(4)};
  padding: ${remCal(24)} ${remCal(36)};
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: {regex: "/profile-pic.jpg/"}) {
        childImageSharp {
          fixed(width: 56, height: 56) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const {author, social} = data.site.siteMetadata
  return (
    <BioContainer>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <MediumContent>Rocky Balboa</MediumContent>
        <Caption>Itailian staliion</Caption>
      </div>
    </BioContainer>
  )
}

export default Bio
