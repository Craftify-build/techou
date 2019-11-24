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

const Bio = ({author, authorDescription, avatarPathName}) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      allImageSharp {
        edges {
          node {
            fixed(width: 56, height: 56) {
              ...GatsbyImageSharpFixed
              originalName
            }
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

  const image = data.allImageSharp.edges.find(
    ({node}) => node.fixed.originalName === avatarPathName,
  )

  return (
    <BioContainer>
      <Image
        fixed={image.node.fixed}
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
        <MediumContent>{author}</MediumContent>
        <Caption>{authorDescription}</Caption>
      </div>
    </BioContainer>
  )
}

export default Bio
