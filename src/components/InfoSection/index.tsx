import React from 'react'
import { Button } from '../ButtonElements'
import { Subtitle, BtnWrap, Column1, Column2, Heading, InfoContainer, InfoRow, InfoWrapper, TextWrapper, TopLine, ImgWrap, Img } from './InfoElements'

interface InfoSectionProps {
  id: string;
  topLine: string;
  headline: string;
  description: string;
  buttonLabell: string;
  img: string;
  alt: string;
  lightBg: boolean;
  lightText: boolean;
  lightTextDescription: boolean;
  imgStart: boolean;
  dark: boolean;
  primary: boolean;
  darkText: boolean;
}

interface Props {
  data: InfoSectionProps
}

const InfoSection = ({ 
  data
 }: Props) => {
  return (
      <InfoContainer id={data.id} lightBg={data.lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={data.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{data.topLine}</TopLine>
                <Heading lightText={data.lightText}>{data.headline}</Heading>
                <Subtitle darkText={data.darkText}>{data.description}</Subtitle>
                <BtnWrap>
                  <Button 
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    dark={data.dark ? 1 : 0}
                    primary={data.primary ? 1 : 0}
                    >{data.buttonLabell}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={data.img} alt={data.alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
  )
}

export { InfoSection }