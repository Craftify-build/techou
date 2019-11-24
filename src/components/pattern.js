import {css} from '@emotion/core'
import {remCal} from './typography'

const bp = {
  tablet: 768,
  desktop: 1024,
}

export const mediaQuery = n => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]])

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`]
    return acc
  }, [])

  return result
}

export const containerLevel1 = css`
  box-sizing: content-box;
  max-width: ${remCal(1000)};
  margin: 0 auto;
  padding-left: ${remCal(24)};
  padding-right: ${remCal(24)};

  ${mediaQuery('tablet')} {
    padding-left: ${remCal(56)};
    padding-right: ${remCal(56)};
  }
`

export const containerLevel2 = css`
  box-sizing: content-box;
  max-width: ${remCal(680)};
  margin: 0 auto;
  padding-left: ${remCal(24)};
  padding-right: ${remCal(24)};

  ${mediaQuery('tablet')} {
    padding-left: ${remCal(56)};
    padding-right: ${remCal(56)};
  }
`
