import React from 'react'
import JainHeader from './JainHeader/JainHeader'
import JainHeroSlider from './JainHeroSlider/JainHeroSlider'
import AboutCompany from './AboutCompany/AboutCompany'
import AdmissionsSection from './AdmissionsSection/AdmissionsSection'
import ProcessSection from '../ProcessSection/ProcessSection'
import AchievementsSection from './AchievementsSection/AchievementsSection'
import StudentStories from './StudentStories/StudentStories'
import FooterSection from './FooterSection/FooterSection'


function Hero() {
  return (
    <>
    <JainHeader />
    <JainHeroSlider />
    <AboutCompany />
    <AdmissionsSection />
    <ProcessSection />
    <AchievementsSection />
    <StudentStories />
    <FooterSection />
    </>
  )
}

export default Hero
