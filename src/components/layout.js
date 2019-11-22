import React from 'react'
import {Link} from 'gatsby'
import 'sanitize.css'

import {Logo} from '../components/typography'
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import {remCal} from '../components/typography'

const headerHeight = '5.3125rem'
const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);

  height: ${headerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${remCal(680)};
  padding-top: calc(${headerHeight} + ${remCal(56)});
`

class Layout extends React.Component {
  render() {
    const {location, title, children} = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    const header = (
      <Logo>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </Logo>
    )
    return (
      <Container>
        <Header>{header}</Header>
        <main>{children}</main>
        <footer
          css={css`
            text-align: center;
            font-size: ${remCal(14)};
            margin-top: ${remCal(148)};
            margin-bottom: ${remCal(92)};
          `}
        >
          Crafted by <strong>Craftify</strong>
        </footer>
      </Container>
    )
  }
}

export default Layout
