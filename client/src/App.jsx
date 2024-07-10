import React from 'react'
import ClerkAuth from './components/Clerk'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import AboutUs from './components/AboutUs'
import SearchPage from './components/SearchPage'
import AllRoutes from './components/Routes/AllRoutes'
// import Testimonials from './components/Testimonial'
const App = () => {
  return (
    <div>
      <AllRoutes />
//       <Routes>
//         <Route path="/" element={<Homepage/>} />
//         <Route path="/search" element={<SearchPage/>} />
//         <Route path="/examlist" element={<ExamList/>} />
//       </Routes>
      {/* <ClerkAuth/> */}
      {/* <Homepage/> */}
      {/* <Navbar/>  */}
      {/* <SearchBar/> */}
      {/* <Testimonials/> */}
      {/* <SearchPage/> */}
      {/* <ExamList/> */}
    </div>
  )
}

export default App