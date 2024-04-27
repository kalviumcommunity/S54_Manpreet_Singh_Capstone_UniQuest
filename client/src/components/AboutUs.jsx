import React from 'react'
import './Components.css'
import college from "./../assets/college.png"
const AboutUs = () => {
  return (
    <div className='about_Background_image'>
      <div className='about_background'>
        <div className='about_section'>
          <div className='about_heading'>
            ABOUT US
          </div>
          <div className='about_bottom'>
            <div className='aboutus_part'>
            Welcome to UniQuest, your compass in the labyrinth of academic choices. We're dedicated to helping students navigate the complexities of exams and university admissions with clarity and confidence. With personalized exam guidance, streamlined decision-making tools, and seamless integration with colleges and universities, UniQuest simplifies the journey to higher education. Our platform offers targeted advertising opportunities for institutions, ensuring students discover the perfect academic fit. Plus, our commitment to accessibility means students can easily explore their options via our user-friendly website or mobile app. Behind the scenes, our developers ensure a secure and efficient experience, with features like user authentication, database management, and third-party integration. Join UniQuest and embark on your path to educational excellence.
            </div>
            <div className='about_image'>
              <img src={college} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs