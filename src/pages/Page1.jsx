import React from 'react'
import Navbar from "../components/Navbar";
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import ChooseSessionMode from '../components/ChooseSessionMode'
import JoinCircle from '../components/JoinCircle'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Download from '../components/Download'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Page1 = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Featured />
        <WhyChooseUs />
        <ChooseSessionMode />
        <JoinCircle />
        <Testimonials />
        <FAQ />
        <Download />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default Page1