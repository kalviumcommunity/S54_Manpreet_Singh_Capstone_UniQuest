import React,{ useRef } from 'react'
import './Components.css'
import Faq from './Faq'
import Accordionmodal from './Accordion'
import AboutUs from './AboutUs'
import Testimonial from './Testimonial'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
const Homepage = () => {
  const testimonialRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const scrollToTestimonial = () => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const scrollToFaq = () => {
    if (faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className='background'>
      <Navbar  scrollToTestimonial={scrollToTestimonial} 
        scrollToAbout={scrollToAbout} 
        scrollToHome={scrollToHome} 
        scrollToFaq={scrollToFaq} />
      <div className='homepageimage' ref={ homeRef}>
        <div className='homepageshadow'>
        <div className='homepagetagline'>
        Explore the World While You Learn.
        </div>
        </div>
       <div className='homepagesearchbar' >
        <SearchBar/>
       </div>
      </div>
      <div className='homepageabout'  ref={aboutRef}>
      <AboutUs/>
      </div>
      <div className='homepagetestimonial'ref={testimonialRef}>
      <Testimonial/>
      </div>
      <div className='homepagefaq' ref={faqRef}>
      <Faq/> 
      </div>
    </div>
  )
}

export default Homepage