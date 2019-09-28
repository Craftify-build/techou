import React from 'react'
import styled from '@emotion/styled'
import css from '@emotion/css'

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
