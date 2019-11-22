import React from 'react'
import {css} from '@emotion/core'
import {remCal} from './typography'

const Footer = () => (
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
)

export default Footer
