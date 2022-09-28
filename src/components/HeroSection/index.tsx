import React, { useState } from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
const HeroSection = () => {
  const [hover, setHover] = useState(false)
  
  function onHover() {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} itemType="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Easy</HeroH1>
        <HeroP>
          Sign Up for a new account today and receive $250 in credit towards your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button primary="true" dark="true" to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export { HeroSection }