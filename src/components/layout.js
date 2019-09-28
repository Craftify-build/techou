import React from 'react'
import {Link} from 'gatsby'
import 'sanitize.css'

import {rhythm, scale} from '../utils/typography'
import {Logo} from '../components/typography'
import styled from '@emotion/styled'

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
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          paddingTop: headerHeight,
        }}
      >
        <Header>{header}</Header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
