import React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import {containerLevel1} from '../pattern'
import {mediaQuery} from '../pattern'
import {remCal} from '../typography'

const baseText = () => css`
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
`

const PitchHeading = styled.h1`
  ${baseText};
  font-weight: 700;
  font-size: ${remCal(76)};
  line-height: ${remCal(100)};

  ${mediaQuery('tablet')} {
    font-size: ${remCal(100)};
    line-height: ${remCal(130)};
  }
`

const PitchSubHeading = styled.p`
  ${baseText};
  font-weight: 400;
  font-size: ${remCal(29)};
  line-height: ${remCal(40)};

  ${mediaQuery('tablet')} {
    font-size: ${remCal(47)};
    line-height: ${remCal(72)};
  }
`

const headerHeight = '0rem'
const contentGuideLineHeight = '8rem'
const contentTextBuffer = '5rem'

const HeroSectionWrapper = styled.section`
  min-height: calc(
    120vh - ${headerHeight} - ${contentGuideLineHeight} - ${contentTextBuffer}
  );
  padding-top: 30vh;
`

const FullWidthContainer = styled.div`
  ${containerLevel1};
`

const ContentGuideLine = styled.div`
  height: ${contentGuideLineHeight};
  width: 0;
  border-left: 1px solid #000;

  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
`
const ContentSectionTitle = styled.h2`
  ${baseText};
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;

  margin-top: 2rem;
  text-align: center;
`

export default () => (
  <FullWidthContainer>
    <HeroSectionWrapper>
      <PitchHeading>Craftify</PitchHeading>
      <PitchSubHeading>
        We do our <strong>craft</strong>, and find the <strong>matter</strong>{' '}
        of life.
      </PitchSubHeading>
    </HeroSectionWrapper>
    <ContentGuideLine />
    <ContentSectionTitle>CONTENT</ContentSectionTitle>
  </FullWidthContainer>
)
