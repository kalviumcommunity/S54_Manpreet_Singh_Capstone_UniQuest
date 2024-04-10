import React from 'react'
import './Components.css'
import Accordionmodal from './Accordion'
const Faq = () => {
  return (
    <div className='back'>
      <div className='top_heading'>
        <div className='faqHeading'>
          FAQ
        </div>
        <div className='faqline1'>
        FREQUENTLY ASKED QUESTIONS ACROSS THE GLOBE 
        </div>
      </div>
      <div className='accordianmodal'>
      <Accordionmodal/>
      </div>
    </div>
  )
}

export default Faq