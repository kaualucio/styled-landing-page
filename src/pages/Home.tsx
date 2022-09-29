import React, { useState } from 'react'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { HeroSection } from '../components/HeroSection'
import { InfoSection } from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/DataSection'
import { Navbar } from '../components/Navbar'
import { Services } from '../components/Services'
import { Sidebar } from '../components/Sidebar'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  function handleIsOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={handleIsOpen} />
      <Navbar toggle={handleIsOpen} />
      <HeroSection />
      <InfoSection data={homeObjOne} />
      <InfoSection data={homeObjTwo} />
      <Services />
      <InfoSection data={homeObjThree} />
      <Contact />
      <Footer />
    </>
  )
}
