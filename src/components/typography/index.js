import React from 'react'
import styled from '@emotion/styled'
import css from '@emotion/css'

const BASE_FONT = 18
export const remCal = pxUnit => `${pxUnit / BASE_FONT}rem`

const baseText = () => css`
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
`

export const Logo = styled.h1`
  ${baseText};
  font-size: 2.375rem;
  font-weight: 700;
  line-height: 90px;
`

export const contentStyle = css`
  font-size: ${remCal(18)};
  line-height: ${remCal(30)};
`
export const boldContentStyle = css`
  font-size: ${remCal(18)};
  line-height: ${remCal(30)};
  font-weight: 700;
`
export const bigContentStyle = css`
  font-size: ${remCal(23)};
  line-height: ${remCal(38)};
  font-weight: 500;
`
export const mediumContentStyle = css`
  font-size: ${remCal(20)};
  line-height: ${remCal(30)};
  font-weight: 500;
`
export const bidHeadingStyle = css`
  font-size: ${remCal(47)};
  line-height: ${remCal(72)};
  font-weight: 700;
`
export const mediumHeadingStyle = css`
  font-size: ${remCal(37)};
  line-height: ${remCal(46)};
  font-weight: 500;
`
export const smallHeadingStyle = css`
  font-size: ${remCal(29)};
  line-height: ${remCal(40)};
  font-weight: 300;
`
export const captionStyle = css`
  font-size: ${remCal(14)};
  line-height: ${remCal(23)};
  font-weight: 400;
`

const BaseTypo = styled.p``
export const MediumContent = styled(BaseTypo)`
  ${mediumContentStyle};
`
export const Caption = styled(BaseTypo)`
  ${captionStyle};
`
