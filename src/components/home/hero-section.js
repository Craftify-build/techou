import React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/core'

const baseText = () => css`
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
`

const PitchHeading = styled.h1`
  ${baseText};
  font-weight: 700;
  font-size: 100px;
  line-height: 130px;
`

const PitchSubHeading = styled.p`
  ${baseText};
  font-weight: 400;
  font-size: 47px;
  line-height: 72px;
`

const headerHeight = '5.3125rem'
const contentGuideLineHeight = '4.0625rem'
const contentTextBuffer = '5rem'

const HeroSectionWrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  min-height: calc(
    100vh - ${headerHeight} - ${contentGuideLineHeight} - ${contentTextBuffer}
  );
  padding-top: 20vh;
`

const FullWidthContainer = styled.div`
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
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
