const mongoose = require("mongoose");
const express = require('express');
const University = require("../models/university");
const User = require("../models/user");
const Exam = require("../models/exams");
const Testimonial = require("../models/testimonial");
const Faq = require("../models/faq");
require("dotenv").config({ path: "../.env" });
const app = express();

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

main()
  .then(() => {
    console.log("Connection created Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

const data = [
  new University({
    name: "NIT Warangal",
    description: "NIT Warangal is ranked 53rd by NIRF 2023 under the Overall category, 21st by NIRF 2023 under the Engineering category, and 59th by the US News 2023 under the University (Overall) category. National Institute of Technology, Warangal (Deemed University) earlier known as the Regional Engineering College was established in 1959. The college has experienced faculty members, staff, and has state-of-the-art infrastructure. Warangal NIT, through various departments, offers UG, PG, and other courses to students. These courses are provided across Engineering, Management, and various other streams. National Institute of Technology, Warangal (NIT Warangal) is known for its BTech and MBA courses. NITW has a big library which is spread across 4,000 sq. mts of land. The library has around 1.87 lakh books, back volumes, standards, technical pamphlets, CD-ROMs, Video Cassettes, e-books, and others. The various other facilities provided by the college are an auditorium, student activity centre, indoor games complex, seminar halls, big stadium, and others.",
    ranking:  " NIRF_Overall is 53 , NIRF_Engineering 21 , US_News_Overall is 59"
    ,
    contact: {
      address: "National Institute of Technology Warangal, Warangal - 506004, Telangana, India",
      phone: "+91-870-2459191",
      email: "info@nitw.ac.in",
      website: "https://www.nitw.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Main conducted by the National Testing Agency (NTA). Admission is based on the JEE Main ranks. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "NIT Warangal has a dedicated Training and Placement Cell (T&P Cell) that facilitates the placement process for students. The institute has an impressive placement record, with a high percentage of students securing job offers from reputed companies during campus placements. The highest and average package offered during NIT Warangal placements 2023 stood at INR 88 LPA and INR 17.29 LPA, respectively. Further, the overall placement rate recorded during NIT Warangal placements 2023 was 82%. A total of 268 companies visited the campus and 1,400 students were placed during NIT Warangal placements 2023. The top recruiters of NIT Warangal in 2023 included leading companies such as Amazon, Microsoft, and L&T.",
    examType: "JEE Main",
    image1:"https://images.shiksha.com/mediadata/images/1702371414phpmbNroc.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1607583729phpHigjGs.png"
  }),
  new University({
    name: "NIT Jalandhar",
    description: "Dr. BR Ambedkar National Institute of Technology Jalandhar is a prestigious Engineering institute in India. NIT Jalandhar has been ranked 46th by NIRF 2023 in the 'Engineering' category and 72nd in the 'Overall' category. Additionally, the institute is ranked 21st in the Engineering (Government) category and 29th in the Engineering category by India Today 2023. Various international organisations have ranked NIT Jalandhar as well. The institute is ranked 1001-1200 in the World University category by Times Higher Education Rankings 2024. Established in the year 1987, the central government gave this institute the status of National Institute of Technology (Deemed University). The central government has renowned this institute as the 'Institute of National Importance'. Dr B R Ambedkar National Institute of Technology provides education at the undergraduate, doctoral and postgraduate levels in the fields of Science, Technology and Engineering. NITJ has 17 different academic departments, which include the Department of Biotechnology, Department of Physics, Department of Civil Engineering, etc. Furthermore, the institute also offers PG Diploma courses in various fields of Engineering, including Chemical Engineering, Industrial Engineering, Thermal Engineering, and Design Engineering.",
    ranking: 
    "  NIRF_Engineering is 46 , NIRF_Overall is 72 ,Times_Higher_Education_World is 1001 - 1200" 
    ,
    contact: {
      address: "Dr. B.R. Ambedkar National Institute of Technology Jalandhar, GT Road, Bye Pass, Jalandhar - 144011, Punjab, India.",
      phone: "+91-181-2690301",
      email: "director@nitj.ac.in",
      website: "https://www.nitj.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Main conducted by the National Testing Agency (NTA). Admission is based on the JEE Main ranks. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and sometimes includes a written test and/or interview conducted by the institute.",
    placement: "NIT Jalandhar has a dedicated Training and Placement Cell (T&P Cell) that facilitates the placement process for students. The institute has a commendable placement record, with a high percentage of students securing job offers from reputed companies during campus placements. The placement process typically includes pre-placement talks, written tests, group discussions, technical and HR interviews, and final job offers. The highest package offered during placements in 2023 stood at INR 1.2 crore per annum. The institute is conducting its placement drive for the batch passing out in 2023. As of Mar 7, 2023, NIT Jalandhar recorded a 73.79% placement rate in the academic year 2022-2023. The average package offered during the NIT Jalandhar placement 2023 stood at INR 12.44 LPA, respectively. A total of 950 students were eligible for the placements, of which 701 students were placed in reputed companies. As per the latest report, the NIT Jalandhar CSE average package stood at INR 16.74 LPA. The top recruiters of 2023 included Microsoft, Google, Zscaler, BPCL, Goldman Sach, Accenture, TCS, Infosys, Wipro, etc.",
    examType: "JEE Main",
    image1:"https://images.shiksha.com/mediadata/images/1664004924phpeQRTBj.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1488193562phpBbf6YJ.jpeg"
  }),
  new University({
    name: "NIT Trichy",
    description: "National Institute of Technology Tiruchirappalli is ranked 9th by NIRF 2023 under the Engineering category, 35th by NIRF 2023 under the Management category, and 4th by NIRF 2023 under the Architecture category. NIT Tiruchirappalli is ranked 781-790 by the QS World University Rankings 2024, 73 by the QS Asian University Rankings - Southern Asia category 2024, and 301-350 by the QS Asian University Rankings 2024 category. NIT Trichy formerly known as Regional Engineering College was established in 1964 as a joint venture of the Government of India and the Government of Tamil Nadu. National Institute of Technology Tiruchirappalli is approved by UGC, AICTE, and the Government of India. Some of the courses offered by NIT Tiruchirappalli are accredited by the NBA. NIT Trichy, through various departments, offers UG, PG, and various other courses to students, across the Engineering, Management, and various other streams. National Institute of Technology Tiruchirappalli (NIT Trichy) is one of the premier technical institutions in India.",
    ranking: 
      "NIRF_Architecture is 4, NIRF_Engineering is 9, NIRF_Management is 35 ",

    contact: {
      address: "National Institute of Technology Tiruchirappalli, Tanjore Main Road, NH67, Near BHEL Trichy, Tiruchirappalli - 620015, Tamil Nadu, India.",
      phone: "+91-431-2503000",
      email: "deanac@nitt.edu",
      website: "https://www.nitt.edu/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Main conducted by the National Testing Agency (NTA). Admission is based on the JEE Main ranks. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "NIT Trichy has a dedicated Training and Placement Cell (T&P Cell) that facilitates the placement process for students. The institute has an excellent placement record, with a high percentage of students securing job offers from reputed companies during campus placements. The placement process typically includes pre-placement talks, written tests, group discussions, technical and HR interviews, and final job offers. The institute also encourages students to participate in internships, industrial training, and research projects to gain practical exposure and enhance their employability skills. The overall placement rate recorded during NIT Trichy BTech placements 2023 was 90.6%. Further, the overall placement rate recorded during NIT Trichy PG placements 2023 was 95.2%. The institute has also released the NIRF report 2023, according to which the 2022 median package for BTech and MTech courses stood at INR 12 LPA and INR 9.50 LPA, respectively. For BArch and MArch courses, the median package stood at INR 6 LPA and INR 5.50 LPA, respectively. Additionally, the median package offered to MBA students during NIT Trichy placements 2022 was INR 7.60 LPA.",
    examType: "JEE Main",
    image1:"https://images.shiksha.com/mediadata/images/1707723684phpFU2Xqf.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1578909697phpgVXpri.jpeg"
  }),
  new University({
    name: "NIT Rourkela",
    description: "NIT Rourkela is ranked 16th by NIRF 2023 under the Engineering category, 36th by Times 2023 under the Engineering category, and others. NIT Rourkela is one of the premier national-level institutions and is funded by the Government of India. The university is managed by the Board of Governors of the National Institute of Technology (Rourkela) Society and is registered under the Societies Act. The National Institute of Technology, Rourkela is accredited by the NBA and is ranked 59 in QS Southern Asia University Rankings 2023. Located in Rourkela, this reputed university is famous for its flagship BTech and MBA courses. Rourkela NIT, through various departments, offers UG, PG, doctoral, PhD, and various other courses to students. These courses are offered across Engineering, Management, and various other streams. National Institute of Technology, Rourkela is also ranked 676 by the QS Sustainability Ranking 2024. NITRKL offers placement assistance to students. The university is visited by top companies such as Apple, Google, Microsoft, Amazon, Wipro, Deloitte, and others. NIT Rourkela, established in 1961 as Regional Engineering College Rourkela, is one of the premier technical institutions in India. It was granted Institute of National Importance status and renamed NIT Rourkela in 2002.",
    ranking:  " NIRF_Engineering is 16 , Times_Engineering is 36 , NIRF_Overall is 37",
    
    contact: {
      address: "National Institute of Technology Rourkela, Sector 1, Rourkela - 769008, Odisha, India.",
      phone: "+91-661-2462021",
      email: "dir@nitrkl.ac.in",
      website: "https://www.nitrkl.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Main conducted by the National Testing Agency (NTA). Admission is based on the JEE Main ranks. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "NIT Rourkela has a dedicated Training and Placement Cell (T&P Cell) that facilitates the placement process for students. The institute has a commendable placement record, with a high percentage of students securing job offers from reputed companies during campus placements. The placement process typically includes pre-placement talks, written tests, group discussions, technical and HR interviews, and final job offers. NIT Rourkela placements 2023 was concluded for the batch passing out in 2023. As per the latest report, the participating recruiters presented 1,326 job offers to the Class of 2023. The highest and average package offered during NIT Rourkela placements in 2023 was INR 83.60 LPA and INR 13.89 LPA, respectively. The top recruiters of NIT Rourkela in 2023 included Apple, Google, Microsoft, Amazon, Wipro, Deloitte, etc.",
    examType: "JEE Main",
    image1:"https://images.shiksha.com/mediadata/images/1607331852phpC49UMS.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1607331878phpYmd02Y.jpeg"
  }),
  new University({
    name: "NIT Kurukshetra",
    description: "National Institute of Technology Kurukshetra, also known as NIT KKR, is one of the top-ranked Engineering institutes in India. The institute has been ranked 58th among the top 100 Engineering institutes in India by NIRF 2023. National Institute of Technology (NIT) Kurukshetra, was established in 1963 and is one of the 31 NITs set up by the Government of India. National Institute of Technology Kurukshetra (NIT Kurukshetra), formerly known as Regional Engineering College Kurukshetra, is one of the premier technical institutions in India. Established in 1963, NIT Kurukshetra offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, technology, and management. The institute is known for its academic excellence, research contributions, and conducive learning environment.",
    ranking: "NIRF_Engineering is 58",
    contact: {
      address: "National Institute of Technology Kurukshetra, Kurukshetra - 136119, Haryana, India.",
      phone: "+91-1744-233208",
      email: "director@nitkkr.ac.in",
      website: "https://www.nitkkr.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Main conducted by the National Testing Agency (NTA). Admission is based on the JEE Main ranks. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "NIT Kurukshetra has a dedicated Training and Placement Cell (T&P Cell) that facilitates the placement process for students. The institute has a commendable placement record, with a high percentage of students securing job offers from reputed companies during campus placements. The placement process typically includes pre-placement talks, written tests, group discussions, technical and HR interviews, and final job offers. NIT Kurukshetra has strong industry connections and collaborations with leading companies from various sectors including IT, core engineering, consulting, finance, and more. The highest and average package offered during NIT Kurukshetra BTech placements 2023 stood at INR 62.75 LPA and INR 14.16 LPA, respectively. Further, the placement rate recorded during NIT Kurukshetra BTech placements 2023 stood at 75.74%. Apart from this, a total of 700 offers were made during NIT Kurukshetra BTech placements 2023. Apart from this, the highest and average package offered during NIT Kurukshetra MBA placements 2023 stood at INR 13.58 LPA and INR 7.69 LPA, respectively. Moreover, a total of 24 offers were made during NIT Kurukshetra MBA placements 2023.",
    examType: "JEE Main",
    image1:"https://images.shiksha.com/mediadata/images/1608297892phpQAldvg.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1608298098php5uuM0z.jpeg"
  }),
  new University({
    name: "Indian Institute of Information Technology, Hyderabad",
    description: "IIIT Hyderabad is an autonomous technical institute located in Hyderabad, Telangana, India. Established in 1998, it is one of the premier institutions in India focused on information technology and related fields. IIIT Hyderabad offers undergraduate, postgraduate, and doctoral programs in various areas of computer science, electronics, and communication. Indian Institute of Information Technology, Hyderabad (IIITH) is a well-recognised institution for higher education. It was established in the year 1998 as a not-for-profit private partnership and is the first IIIT across the country under this model. IIIT Hyderabad has been accredited at Grade 'A ' by the National Assessment & Accreditation Council (NAAC). IIIT Hyderabad offers several UG, PG and doctoral programs. The flagship programmes offered at IIIT Hyderabad are BTech and MTech.",
    ranking: 
      "NIRF_Engineering is 55",
    contact: {
      address: "Indian Institute of Information Technology Hyderabad, Gachibowli, Hyderabad - 500032, Telangana, India.",
      phone: "+91-40-6653-1000",
      email: "info@iiit.ac.in",
      website: "https://www.iiit.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for entrance examinations such as JEE Main conducted by the National Testing Agency (NTA) or the institute's own entrance exam. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "IIIT Hyderabad has a dedicated Career Development Center (CDC) that facilitates the placement process for students. The institute has an impressive placement record, with a high percentage of students securing job offers from reputed companies during campus placements. The placement process typically includes pre-placement talks, written tests, group discussions, technical and HR interviews, and final job offers. IIIT Hyderabad has strong industry connections and collaborations with leading companies from various sectors including IT, core engineering, consulting, finance, and more. The placement rate recorded during IIIT Hyderabad BTech placements 2023 was 100%. The overall highest package offered during IIIT Hyderabad placements 2023 stood at INR 102 LPA. Further, the overall average package offered during IIIT Hyderabad placements 2023 stood at INR 23.43 LPA. The highest package was grabbed by the student of MS BY Research CSD course. Further, the highest package offered during IIIT Hyderabad BTech CSE and ECE placements 2023 stood at INR 69 LPA and INR 45 LPA, respectively. Further, the average package offered during IIIT Hyderabad BTech CSE and ECE placements 2023 stood at INR 32.20 LPA and INR 27.24 LPA, respectively. The lowest package offered during IIIT Hyderabad BTech CSE and ECE placements 2023 stood at INR 12 LPA and INR 11 LPA, respectively.",
    examType: "JEE Main",
    image1:"https://images.shiksha.com/mediadata/images/1701684334phpiOqgtg.jpeg",
    image2:"https://newsmeter.in/h-upload/2024/05/31/372374-iiit-hyderabad.webp"
  }),
  new University({
    name: "Indian Institute of Information Technology Allahabad",
    description: "IIIT Allahabad is an autonomous technical institute located in Allahabad (Prayagraj), Uttar Pradesh, India. Established in 1999, it is one of the premier institutions in India focused on information technology and related fields. Indian Institute of Information Technology Allahabad is one of the most prestigious institutes in India. IIIT Allahabad is ranked 89th in the Engineering category by NIRF 2023. IIIT Allahabad has been ranked by several other ranking bodies on international and national level. The QS World University Ranking has ranked IIIT Allahabad at 189th in the Southern Asia category. Additionally, IIT Allahabad is ranked 10th in the Engineering (government) category by India Today 2023. Indian Institute of Information Technology, Allahabad (IIIT) was established in 1999 and was awarded the status of deemed university status by the Government of India in 2000. In 2014, the Ministry of Human Resource Development (MHRD) recognised IIIT Allahabad as an 'Institute of National Importance'. Indian Institute of Information Technology, Allahabad offers four programmes: BTech, MTech, MBA, and PhD across four departments, namely Applied Sciences, Electronics and Communication Engineering, Information Technology, and Management Sciences. IIIT Allahabad admissions are entrance-based. IIT Allahabad entrance exams are JEE Main, DASA, GATE, CAT, etc.",
    ranking: "NIRF_Engineering is 89, QS_Southern_Asia is 189",
    contact: {
      address: "Indian Institute of Information Technology Allahabad, Deoghat, Jhalwa, Prayagraj (Allahabad) - 211015, Uttar Pradesh, India.",
      phone: "+91-532-292-2000",
      email: "director@iiita.ac.in",
      website: "https://www.iiita.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for entrance examinations such as JEE Main conducted by the National Testing Agency (NTA) or the institute's own entrance exam. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "IIIT Allahabad has a dedicated Training and Placement Cell (T&P Cell) that facilitates the placement process for students. The institute has a commendable placement record, with a high percentage of students securing job offers from reputed companies during campus placements. The placement process typically includes pre-placement talks, written tests, group discussions, technical and HR interviews, and final job offers. IIIT Allahabad placements report 2023 is not released. Earlier, the highest package offered during IIIT Allahabad placements 2022 stood at INR 102.5 LPA. Further, the average package offered during IIIT Allahabad BTech and MTech / MBA placements 2022 stood at INR 30.68 LPA and INR 19.57 LPA, respectively. Apart from this, the placement rate recorded during IIIT Allahabad UG and PG placements 2022 was 100%.",
    examType: "JEE Main",
    image1:"https://images.shiksha.com/mediadata/images/1707213419phpbXH2Hh.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1502278055phpGYzaMY.jpeg"
  }),
  new University({ 
    name: "Indian Institute of Technology Bombay (IIT Bombay)",
    description: "Established in 1958, the Indian Institute of Technology Bombay (also known as IIT Bombay or IIT Mumbai) is the first public college to have laid its foundation stone with assistance from UNESCO. In 1961, it was declared as an Institute of National Importance by the Parliament of India. It has also been declared a 'Deemed University' and is autonomous in nature. IIT Bombay is ranked 3 by NIRF 2023 under the Engineering category, 2 by India Today 2023 under the Engineering category, and 2 by India Today 2023 under the Engineering (Government) category. Internationally, IIT Bombay is ranked 149 by the QS World University Rankings 2024 under the Top Global Universities category and 172 in the QS World Rankings 2023. IIT Bombay offers degree and dual degree programmes at the UG, PG and doctorate levels. The institute offers 80+ courses under 16 departments in the stream of Engineering, Technology, Science and Management. The applicants are chosen through national-level tests conducted by various authorities, such as JEE Advanced, GATE, etc.",
     ranking: 
      "NIRF_Engineering is 3,India_Today_Engineering_Government is 2,India_Today_Engineering is  2",
    contact: {
      "address": "Indian Institute of Technology Bombay, Powai, Mumbai - 400076, Maharashtra, India.",
      "phone": "+91-22-25722545",
      "email": "webmaster@iitb.ac.in",
      "website": "https://www.iitb.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Advanced conducted by IITs. Admission is based on JEE Advanced ranks. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "According to the latest media reports, 22 students have bagged job offers of over INR 1 Crore per Annum packages, during the first round of placements 2023-24. A major bulk of the highest salaries have been received in the Research Development sector, for which the IIT Bombay average package so far stands at INR 36.90 LPA, which is almost 14% higher in comparison to last year. Furthermore, 63 students have accepted international offers in the first phase. A total of 1,340 job offers have been distributed among the 1,188 students placed. This includes 7 PSUs and 297 PPOs. The list of companies that were part of IIT Bombay placements 2024 includes Airbus, Apple, Google, Intel, and many others. Earlier placements reported the highest international package of INR 3.67 crore per annum, highest domestic package of INR 1.68 crore per annum, average package of INR 21.82 LPA, a placement rate of 82%, with 384 companies participating, 1898 offers, and 1104 internship offers. Top recruiters included Uber, Rubrik, and Millennium.",
    examType: "JEE Advanced",
    image1:"https://images.shiksha.com/mediadata/images/1701691677php7tlZPd.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1507098133phpytwr5I.jpeg"
  }),
  new University( {
    name: "Indian Institute of Technology Delhi (IIT Delhi)",
    description: "Indian Institute of Technology Delhi (more popularly known as IIT Delhi) is one of the most prestigious universities in India. IIT Delhi is ranked 2nd by the NIRF 2023 under the Engineering category, 1st by India Today 2023 under the Engineering category, and 1st by the India Today 2023 under the Engineering (Government) category. IIT Delhi is popular for its flagship programmes, i.e. MTech and BTech courses. Indian Institute of Technology Delhi (IIT Delhi), through various departments and schools of study, offers UG, PG, and various other courses to students. IIT Delhi is also ranked 197 internationally by the QS World University Rankings 2024. It is one of the twenty-three IITs present in India. IITD was established in 1961 as the College of Engineering. Later, it was declared the Institution of National Importance under the Institutes of Technology (Amendment) Act of 1963. Over the years, over 48,000 students have graduated from the IIT Delhi in several disciplines including Physical Sciences, Engineering, Management, and Humanities and Social Sciences, and various other streams. Over 15,738 students have received their BTech degree from IIT Delhi over the years.",
    ranking: 
      "NIRF_Engineering is 2,India_Today_Engineering_Government is 1,India_Today_Engineering is 1",
    contact: {
      "address": "Indian Institute of Technology Delhi, Hauz Khas, New Delhi - 110016, Delhi, India.",
      "phone": "+91-11-26597135",
      "email": "webmaster@admin.iitd.ac.in",
      "website": "https://home.iitd.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Advanced conducted by IITs. Admission is based on JEE Advanced ranks. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "IIT Delhi has an excellent placement record with top companies visiting the campus for recruitment. The highest package offered in the past has been INR 1.39 crore per annum. Major recruiters include Microsoft, Google, Facebook, and Intel. The average package for B.Tech students is around INR 16 LPA, and for M.Tech students, it is around INR 12 LPA. The institute also provides ample internship opportunities to students with stipends ranging from INR 20,000 to INR 1 lakh per month.",
    examType: "JEE Advanced",
    image1:"https://images.shiksha.com/mediadata/images/1701754759php2ihE3z.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1504610950phpzuhaTW.jpeg"
  }),
  new University({
    name: "Indian Institute of Technology Madras (IIT Madras)",
    description: "Identified as an ‘Institute of Eminence', the Indian Institute of Technology Madras (IIT Madras or IITM) was established in 1959 as a public technical and research university. It is the third IIT be set up by the Government of India and is autonomous in nature. Located in Chennai, Tamil Nadu, the IIT Madras campus is home to India’s first university-based research park- IITMR. IIT Madras has been consistently ranked 1 by the NIRF Rankings in 2023 for the fourth time in a row. Internationally, IIT Madras was ranked 285 in the QS World University Rankings 2024 and 250 in the QS World University Rankings of 2023. IIT Madras, through its 16 departments, 4 national and 10 institute research centres offer more than 100 full-time/ part-time/ online courses at UG, PG, and doctoral levels across the Engineering, Science, Humanities, and Management. The institute recently launched the country's first online BSc Program in Programming in Data Science. IITM is also known for its Quality Improvement Programme (QIP), which is sponsored by the AICTE.",
    ranking: 
      "NIRF_Engineering is 1 , NIRF_Managementis 15",
    contact: {
      "address": "Indian Institute of Technology Madras, Chennai - 600036, Tamil Nadu, India.",
      "phone": "+91-44-2257-8000",
      "email": "deanadmn@iitm.ac.in",
      "website": "https://www.iitm.ac.in/"
    },
    eligibility:  "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Advanced conducted by IITs. Admission is based on JEE Advanced ranks.For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "IIT Madras has a dedicated Placement Office that facilitates the placement process for students. The institute has an excellent placement record, with a high percentage of students securing job offers from reputed companies during campus placements. According to media reports, 50% of the total students were placed during IIT Madras Phase 1 placement drive 2023-24. Further, the median package offered during IIT Madras placements 2024 stood at INR 19 LPA. Further, 19% increase in internship offers was witnessed for the batch of 2023-24 during IIT Madras placements 2024 as compared with previous year. Other than this, JP Morgan Chase, Texas Instruments and Adobe emerged as the top recruiters during IIT Madras placements 2024. Earlier, the 2023 placement drive concluded with 1,612 offers from more than 480 companies. The highest package offered to BTech and MTech students during IIT Madras placements 2023 stood at INR 1.31 crore per annum and INR 54.21 LPA, respectively. The median package offered to MS (Engineering Streams) and MSc (Science Stream) was INR 15 LPA and INR 9.62 LPA, respectively. Further, the IIT Madras highest package recorded for MA and MBA during placements 2023 was INR 26.57 LPA and INR 30.66 LPA, respectively. Moreover, the highest package offered to PhD students was INR 35.89 LPA. The top recruiters of placements 2023 were Amazon, Bajaj Auto Limited, EY India, Reliance, TCS, etc.",
    examType: "JEE Advanced",
    image1:"https://images.shiksha.com/mediadata/images/1701775135phpFE4Ewx.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1488171142phpcUJ7yi.jpeg"
  }), 
  new University({
    name: "Indian Institute of Technology Kharagpur (IIT Kharagpur)",
    description: "IIT Kharagpur is one of the renowned institutes present in India. IIT Kharagpur was established in 1951 and is ranked 6th by the NIRF 2023 under the Engineering category. The college is also ranked 4th by India Today 2023 under the Engineering (Government), and Engineering categories. IIT KGP, through various departments and schools of study, offers UG, PG, PhD, and other courses to students across the Management, Law, Engineering, and various other streams. Internationally, IIT Kharagpur is ranked 271 by the QS World University Rankings 2024 under the Top Global Universities category, 5th by the QS World University Rankings: Southern Asia 2024, and 59th by the QS World University Rankings: Asia 2024. IIT Kharagpur offers competitive placement opportunities to students in top companies. According to media reports, on the first day of IIT Kharagpur placements 2023-24, a total of 700 placement offers were made. It was observed out of all the offers made, 6 offers were made with a package of more than INR 1 crore per annum. The University of Warwick (WMG), National Tsing Hua University (NTHU), Purdue University, and the University of Torino have entered into collaborative agreements with the Indian Institute of Technology, Kharagpur.",
    ranking: 
      "NIRF_Engineering is 6 , India_Today_Engineering_Government is 4,India_Today_Engineering is 4",
    contact: {
      "address": "Indian Institute of Technology Kharagpur, Kharagpur - 721302, West Bengal, India.",
      "phone": "+91-3222-255221",
      "email": "direct@iitkgp.ac.in",
      "website": "http://www.iitkgp.ac.in/"
    },
    eligibility: 
       "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Advanced conducted by IITs. Admission is based on JEE Advanced ranks.For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "The second phase of IIT Kharagpur placements 2024 has started from the first week of Jan and will continue till April 2024. According to media reports, a total of 700 placement offers were made on the first day of IIT Kharagpur placements 2023-24. Further, more than 19 international offers were received by students during IIT Kharagpur placements 2023-24. Importantly, 6 offers with package of more than INR 1 crore per annum were offered during IIT Kharagpur placements 2023-24. Over 61 companies offered various job roles to students, mainly in Finance, Banking, Analytics, Software, Core Engineering and Consulting sectors. Other than this, according to IIT Kharagpur Engineering NIRF report 2023, the median package offered during IIT Kharagpur BTech and MTech placements 2022 stood at INR 18.75 LPA and INR 13.50 LPA, respectively. Further, as per the Management NIRF report 2023, the median package offered during IIT Kharagpur MBA placements 2022 stood at INR 18.08 LPA. Earlier, as per the official placement brochure, 1,821 students were placed during the 2023 drive. BOSCH, Airbus, Accenture, Oracle, and many other renowned companies participated in IIT Kharagpur placements 2023. According to some media reports, the institute concluded its first phase of the placement drive 2023. A total of 300 companies participated in the placement drive and more than 1,600 offers were secured by the students. Apart from this, a total of 45 international offers have been grabbed in the first phase of IIT KGP placements 2023. The institute registered 48 offers in the CTC range of Rs 50 lakh to Rs 2.64 crore. Major giants who participated in the IIT Kharagpur placements 2023 were Excel, Google, Microsoft, Qualcomm, etc. The IIT Kharagpur highest package recorded till now is above INR 2.68 crore per annum. Additionally, 900 internship offers were grabbed from 140 companies that were part of IIT Kharagpur internships 2022."
    ,
    examType: "JEE Advanced",
    image1:"https://images.shiksha.com/mediadata/images/1702367683phpB1oyEJ.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1549359594phpvIFLi0.png"
  }),
  new University({
    name: "Indian Institute of Technology (IIT) Ropar",
    description: "Indian Institute of Technology (IIT) Ropar was established in 2008 as one of the eight IITs that was set up by the MHRD and the Government of India. IIT Punjab, through its 11 departments, offers UG, PG, and PhD courses to students across Engineering, Science, and various other streams. IIT Ropar has also been ranked 22nd by NIRF 2023 for Engineering. Moreover, the institute has also been ranked 20th in University (Technical) category by The Week 2023. In QS World University Rankings 2024, the IIT Ropar is ranked 90th in Sourthern Asia. IIT Ropar cutoff 2023 is most competitive for the BTech programmes. In 2023, BTech most competitive cutoff was 1859, which was for the Computer Science and Engineering specialisation. Moreover, the IIT JAM counselling was concluded after four rounds. IIT Ropar MSc cutoff in 2023 was 445 for Mathematics course, 514 for Physics, and 532 for Chemistry. During the IIT Ropar placements 2023, the average package offered stood at INR 13.31 LPA and the placement rate achieved was 56.44%.",
    ranking: "NIRF 2023 (Engineering): 22, NIRF 2023 (Overall): 33, QS World University Rankings 2024 (Southern Asia): 90",
    contact: {
        address: "Indian Institute of Technology Ropar, Rupnagar - 140001, Punjab, India.",
        phone: "+91-1881-242191",
        email: "registrar@iitrpr.ac.in",
        website: "https://www.iitrpr.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Advanced conducted by IITs. Admission is based on JEE Advanced ranks. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "IIT Ropar has a dedicated Career Development and Corporate Relations Center that facilitates the placement process for students. The institute has been achieving remarkable placement records, with a high percentage of students securing job offers from reputed companies during campus placements. The placement process typically includes pre-placement talks, written tests, group discussions, technical and HR interviews, and final job offers. IIT Ropar placements 2023-24 (phase 2) has started on the first week of on Jan, 2024 and will continue till April 2024. Earlier, the average package offered during IIT Ropar BTech and MTech / MSc placements 2023 stood at INR 20.99 LPA and INR 13.31 LPA, respectively. Apart from this, the placement rate recorded during IIT Ropar BTech and MTech / MSc placements 2023 was 82.21% and 56.44%, respectively. Other than this, according to IIT Ropar NIRF report 2023, the median package offered during IIT Ropar BTech and MTech placements 2022 stood at INR 17.14 LPA and INR 10 LPA, respectively.",
    examType: "JEE Advanced",
    image1:"https://images.shiksha.com/mediadata/images/1704793773php57boPK.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1550027585phpwxiTFV.jpeg"
}),
new University({
    name: "Indian Institute of Technology (IIT) Roorkee",
    description: "Indian Institute of Technology Roorkee was established in 1847 and is the seventh IIT recognised as an Institution of National Importance. IIT Roorkee is accredited by NAAC and approved by AICTE and UGC. IIT Roorkee is a public technical research university located in Uttarakhand. IIT Roorkee is the oldest technical institution in Asia that was given university status in 1949 and has ranked 5 by the NIRF 2023 under the Engineering category. The institution is aslo ranked 5 by India Today 2023 under the Engineering (Government), and Engineering categories. IITR offers 14 Undergraduate (UG), 24 Postgraduate (PG), and various other PhD courses through its school and 23 departments across the fields of Engineering, Science, Architecture, Management, and Social Sciences. Globally, IIT Roorkee is ranked 369 by the Q S World University in the category of Top Global Universities Rankings 2024, 14 by the Q S World University Rankings 2024: Southern Asia 2024 and 116 by the Q S World University Rankings: Asia 2024. IITR fees range from INR 12,000 to INR 10.70 lakh. Indian Institute of Technology Roorkee course admission is based on the entrance exam. Indian Institute of Technology Roorkee entrance exams are JEE Main, JEE Advanced, CAT, GATE, IIT JAM, CEED, and NATA. IIT Roorkee cutoff 2023 for the BTech courses ranged between 412 and 20728 for the General All India category students. During IIT Roorkee placements, a placement rate of 100% was recorded. IIT Roorkee average package stood at INR 18.34 LPA. IIT Roorkee has separate boys and girls hostels, one coed hostel, and married couples' hostels. IITR also has a well-equipped library with a collection of over 3.20 lakh documents, online databases, CD-ROMs, and more.",
    ranking: "QS World Ranking 2024 (University): 369, NIRF 2023 (Engineering): 5, Times Higher Education 2023 (Asia University): 83",
    contact: {
        address: "Indian Institute of Technology Roorkee, Roorkee - 247667, Uttarakhand, India.",
        phone: "+91-1332-285311",
        email: "director@iitr.ac.in",
        website: "https://www.iitr.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Advanced conducted by IITs. Admission is based on JEE Advanced ranks. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "IIT Roorkee has a dedicated Career Development Center (CDC) that facilitates the placement process for students. The institute has an excellent placement record, with a high percentage of students securing job offers from reputed companies during campus placements. According to media reports, 23 international and in total 802 offers were grabbed during IIT Roorkee 2024 phase-1 placements. Databricks offered a salary package of INR 2.05 crore per annum to a student during the first phase of IIT Roorkee placements 2023-24. Further, a total of 172 companies visited the campus during IIT Roorkee placements 2024. Earlier, the highest and average package offered during IIT Roorkee MBA placements 2023 stood at INR 27.94 LPA and INR 18.34 LPA, respectively. Further, the placement rate recorded during IIT Roorkee MBA placements 2023 was 100%. Apart from this, the median and lowest package offered during IIT Roorkee MBA placements 2023 stood at INR 18.09 LPA and INR 11.60 LPA, respectively.",
    examType: "JEE Advanced",
    image1:"https://images.shiksha.com/mediadata/images/1704287394phpTcMrK8.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1570610774php52UF0f.png"
}),
new University({
    name: "Indian Institute of Technology (IIT) Hyderabad",
    description: "IIT Hyderabad is one of the newer IITs established in India, located in Kandi, Sangareddy, Telangana. Indian Institute of Technology Hyderabad or IITH is a second-generation IIT that came into existence in 2008 along with seven other IITs. IIT Hyderabad is one of the best colleges in the country and has been ranked 8th under the 'Engineering' category by the NIRF 2023 Rankings. In addition to this, the institute has been ranked 50th under the 'Southern Asia' category by the QS World University Rankings 2023. IIT Hyderabad is an Institute of National Importance (INI). Started by the Ministry of Human Resource Development, IIT Hyderabad is a government institute that offers various UG, PG and doctoral courses in branches like Engineering, Science and Liberal Arts, Design and Management. IITH has signed numerous national and international MoUs with corporates and universities for collaboration on academic and professional fronts. The highest and average packages offered during IIT Hyderabad placements 2022 were INR 65 LPA and INR 23 LPA, respectively. IITH offers two types of scholarships at the institutional level - merit-cum-means and ST/SC scholarships.",
    ranking: "NIRF 2023 (Engineering): 8, QS World University Rankings 2023 (Southern Asia): 50, US News (University Overall): 17",
    contact: {
        address: "Indian Institute of Technology Hyderabad, Kandi, Sangareddy - 502285, Telangana,India.",
        phone: "+91-40-2301-6002",
        email: "office@iith.ac.in",
        website: "https://www.iith.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Advanced conducted by IITs. Admission is based on JEE Advanced ranks. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "IIT Hyderabad has a dedicated Career Development Services (CDS) that facilitates the placement process for students. The institute has been achieving remarkable placement records, with a high percentage of students securing job offers from reputed companies during campus placements. IIT placements drive 2023-24 started on Dec 1, 2023 and will continue till April, 2024. Earlier, the highest and average package offered during IIT Hyderabad placements 2023 stood at INR 63.78 LPA and INR 20.07 LPA, respectively. Further, the placement rate recorded during IIT Hyderabad placements 2023 was 74.90%. Other than this, a total of 335 companies participated and 621 offers were made during IIT Hyderabad placements 2023.",
    examType: "JEE Advanced",
    image1:"https://images.shiksha.com/mediadata/images/1704791401phptGyXGi.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1488179661phpkvuxWQ.jpeg"
}),
new University({
    name: "Birla Institute of Technology and Science (BITS) Pilani",
    description: "Established in 1964, Birla Institute of Technology and Science, Pilani (also known as BITS Pilani) is a private deemed university located in Pilani, Rajasthan, India. The other three campuses of BITS are located in Goa, Hyderabad, and Dubai. Birla Institute of Technology and Science Pilani is accredited by the NAAC with an ‘A’ Grade and approved by the UGC. The deemed university is ranked 20 and 25 under the 'University' and 'Engineering' by the NIRF 2023 Rankings. BITS Pilani Deemed University, through 13 of its departments, offers UG, PG, PhD courses to students across the Pharmacy, Management, Engineering, and other streams. The Aditya Birla Group supports the deemed university, which is one of the first six institutions to get the title of Institute of Eminence in 2018. BITSAT (BITS Admission Test), an all-India computerised admission test, is administered by BITS. The BITSAT Exam is the only tool used to evaluate admission.",
    ranking: "NIRF 2023 (Pharmacy): 3, NIRF 2023 (University): 20, NIRF 2023 (Engineering): 25",
    contact: {
        address: "Birla Institute of Technology and Science, Pilani - 333031, Rajasthan, India.",
        phone: "+91-1596-515-294",
        email: "info@bits-pilani.ac.in",
        website: "https://www.bits-pilani.ac.in/"
    },
    eligibility: "For undergraduate programs (B.E./B.Tech), candidates need to qualify for the BITSAT (Birla Institute of Technology and Science Admission Test) conducted by BITS Pilani. For postgraduate programs (M.E./M.Tech), candidates must meet the eligibility criteria specified by the university, which may include academic qualifications, entrance exam scores, and/or relevant work experience.",
    placement: "BITS Pilani has a dedicated Career and Placement Division (CPD) that facilitates the placement process for students. The university has an excellent placement record, with a high percentage of students securing job offers from reputed companies during campus placements. The placements are going on for the batch passing out in 2024. As per the latest report, the highest and average package offered to the MBA (Business Analytics) batch 2024 so far stood at INR 27 LPA and INR 17.36 LPA. Further, the median package offered so far stood at INR 17.50 LPA. The top recruiters of BITS Pilani in 2024 included EY, HSBC, Yes Bank, KPMG, Accenture, Barclays, IBM, etc. Earlier, the highest and median package offered to the first batch of MBA (Business Analytics) stood at INR 27 LPA and INR 17 LPA. Impressively, 95% of the MBA BA batch 2023 were placed in reputed companies. Additionally, the media reports reveal that the overall average and median package offered during BITS Pilani placements 2023 stood at INR 30.37 LPA and INR 30 LPA, respectively.",
    examType: "BITSAT",
    image1:"https://images.shiksha.com/mediadata/images/1604330591phpRxn0G0.png",
    image2:"https://images.shiksha.com/mediadata/images/1579757643phpEK1frD.jpeg"
}),
new University({
  name: "Birla Institute of Technology and Science (BITS) Goa",
  description: "Birla Institute of Science & Technology, Goa was established in 2004. It is one among the other four campuses of BITS Pilani which is managed by Aditya Birla Group. The other three campuses are located in Hyderabad, Pilani, and Dubai. The institute is duly recognised by University Grants Commission (UGC) and has been accredited with ‘A' grade by the National Assessment and Accreditation Council (NAAC). It offers higher education in the field of Science and Technology with courses ranging in UG, PG and Doctorate level. The campus is known for its modern infrastructure, academic excellence, and holistic development of students.",
  ranking: "NIRF 2023 (Pharmacy): 3, NIRF 2023 (University): 20, NIRF 2023 (Engineering): 25",
  contact: {
    address: "Birla Institute of Technology and Science, Pilani - K. K. Birla Goa Campus, NH 17B Bypass Road, Zuarinagar, Goa - 403726, India.",
    phone: "+91-832-2580-440",
    email: "admissions@goa.bits-pilani.ac.in",
    website: "https://www.bits-pilani.ac.in/"
  },
  eligibility: "The eligibility criteria for admission to undergraduate and postgraduate programs at BITS Goa are similar to those of BITS Pilani and are based on the BITSAT entrance exam for undergraduate programs and specific requirements for postgraduate programs.",
  placement: "BITS Goa follows the same placement process as BITS Pilani, with a dedicated Career and Placement Division (CPD) facilitating the placement process. The campus has a strong record of placements, with students receiving job offers from top companies during campus recruitment drives. According to media reports, the highest package and average package offered during BITS Pilani Goa placements 2023 stood at INR 60.75 LPA and INR 30.37 LPA, respectively. Further, a total of 109 companies visited the campus during BITS Goa placements 2023. The highest stipend offered during BITS Goa summer placements 2023 stood at INR 3.16 lakh per month. Apart from this, the top recruiters during BITS Goa placements 2023 included leading companies such as Google, Microsoft, and Amazon.",
  examType: "BITSAT",
   image1:"https://images.shiksha.com/mediadata/images/1679896625phpEGpzy2.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1579686785phpLDDVCf.png"
}),
new University({
  name: "Birla Institute of Technology and Science (BITS) Hyderabad",
  description: "Birla Institute of Technology and Science (BITS), Pilani-Hyderabad campus is one of the premier Technical and Science institutes of higher learning in India that began functioning in 2008. It is commonly known as BITS Hyderabad and is the youngest of the four physical campuses of BITS Pilani. The Institute offers nearly 30 courses through 12 departments that provide necessary academic and administrative support. Computer Science & Information Systems, Physics, Biological Sciences, Chemical Engineering, Chemistry, Mathematics, Humanities, and Social Science are some of the major academic departments of the Institute. Accredited by NAAC with an ‘A’ Grade, BITS Hyderabad is approved by the UGC and AICTE. BITS Hyderabad cutoff for BE, Integrated MSc, and BPharm programme is released based on BITSAT scores. The most competitive cutoff is for the BE in the Electronics and Instrumentation branch. In 2023, the closing cutoff was 244 and considering the three-year trend, the cutoff has improved in the last two years. During the BITS Hyderabad placements 2023, the highest and average package stood at INR 60.75 LPA and INR 30.37 LPA, respectively.",
  ranking: "NIRF 2023 (Pharmacy): 3, NIRF 2023 (University): 20, NIRF 2023 (Engineering): 25",
  contact: {
    address: "Birla Institute of Technology and Science, Pilani - Hyderabad Campus, Jawahar Nagar, Shameerpet Mandal, Hyderabad - 500078, Telangana, India.",
    phone: "+91-40-6630-3999",
    email: "admissions@hyderabad.bits-pilani.ac.in",
    website: "https://www.bits-pilani.ac.in/"
  },
  eligibility: "The eligibility criteria for admission to undergraduate and postgraduate programs at BITS Hyderabad are similar to those of BITS Pilani and BITS Goa, based on the BITSAT entrance exam for undergraduate programs and specific requirements for postgraduate programs.",
  placement: "BITS Hyderabad follows the same placement process as BITS Pilani and BITS Goa, with a dedicated Career and Placement Division (CPD) facilitating the placement process. The campus has a strong record of placements, with students receiving job offers from top companies during campus recruitment drives. The placements are going on for the 2023 batch and 109 recruiters have participated among all the campuses of BITS Pilani till August 2022. According to media reports, the median package offered during BITS Pilani placements for the 2023 batch stood at INR 30 LPA. Further, the overall average and highest package offered till August 2022 stood at INR 30.37 LPA and INR 60.75 LPA, respectively.",
  examType: "BITSAT",
   image1:"https://images.shiksha.com/mediadata/images/1705583174phpPYe1Mj.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1646196661phpLwCuQ3.jpeg"
}),
new University({
  name: "All India Institute of Medical Sciences (AIIMS), New Delhi",
  description: "AIIMS Delhi is ranked 1st by India Today and NIRF 2023 under the Medical category, 6th by NIRF 2023 under the Overall category, and 12th by US News 2023 under the University (Overall) category. AIIMS is ranked 123rd by the QS WUR Ranking By Subject category 2023. AIIMS Delhi is one of the various AIIMS colleges present in India. At present, there are 23 AIIMS in India out of which 20 are functional and the rest are under construction or yet to be operational. Delhi AIIMS, through more than 40 departments, offers UG, PG, and various other courses to students. These courses are offered across the Medical and various other streams. Located in Gautam Nagar, Delhi, the All-India Institute of Medical Sciences is known as an institution of national importance by an Act of Parliament. The college has more than 600 research publications by its faculty and researchers in a year. Delhi AIIMS has an attached AIIMS Hospital. AIIMS also manages a 60-bedded hospital present in Ballabgarh in Haryana at the Comprehensive Rural Health Centre. The college provides community-based teaching and research in medical and related fields. AIIMS Delhi provides a BSc (Hons) in Nursing and a Master in Biotechnology as its flagship courses. This reputed college was established under an Act of Parliament 1956.",
  ranking: "India Today (Medical): 1, NIRF (Medical): 1, NIRF (Overall): 6, US News (University): 12, QS WUR (Subject): 123",
  contact: {
    address: "All India Institute of Medical Sciences, Ansari Nagar, New Delhi - 110029, India.",
    phone: "+91-11-2658-8500",
    email: "director@aiims.edu",
    website: "https://www.aiims.edu/"
  },
  eligibility: "For undergraduate programs (MBBS), candidates need to qualify for the AIIMS Entrance Examination conducted by AIIMS, New Delhi.For postgraduate programs (MD/MS/MDS), candidates must have a valid NEET PG (National Eligibility cum Entrance Test for Post-Graduation) score. Admission is based on NEET PG scores and may include a written test and/or interview conducted by the institute.",
  placement: "AIIMS Delhi offers internship and residency programs as part of its undergraduate and postgraduate medical education. Graduates from AIIMS Delhi have excellent career prospects and are highly sought after by hospitals, research institutions, and healthcare organizations in India and abroad. According to AIIMS Delhi NIRF report 2023, the median package offered during AIIMS Delhi MBBS placements 2020 stood at INR 18 LPA. Further, the placement rate recorded during AIIMS Delhi MBBS placements 2020 was 100%. Apart from this, the median package offered during AIIMS Delhi UG 3-year, UG 4-year, and PG 2-year placements 2022 stood at INR 12 LPA, INR 25 LPA, and INR 18 LPA, respectively. Further, the median package offered during AIIMS Delhi PG 3-year placements 2022 stood at INR 40 LPA.",
  examType: "NEET",
   image1:"https://images.shiksha.com/mediadata/images/1702364817phpfTcZUK.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1585306502phpDb9cyz.jpeg"
}),new University({
  name: "Armed Forces Medical College (AFMC), Pune",
  description: "Armed Forces Medical College (AFMC) Pune is a premier medical college located in Pune, Maharashtra, India. Established in 1948, it is affiliated with the Maharashtra University of Health Sciences (MUHS) and offers undergraduate and postgraduate programs in medicine, nursing, and allied healthcare fields. The college is operated by the Indian Armed Forces and is known for its rigorous academic curriculum, military training, and commitment to public health service.",
  ranking: "India Today (Medical): 3, NIRF (Medical): 6",
  contact: {
    address: "Armed Forces Medical College, Wanowrie, Pune - 411040, Maharashtra, India.",
    phone: "+91-20-2633-4232",
    email: "info@afmc.nic.in",
    website: "https://www.afmc.nic.in/"
  },
  eligibility: "For undergraduate programs (MBBS), candidates need to qualify for the NEET UG (National Eligibility cum Entrance Test for Undergraduate) conducted by the National Testing Agency (NTA). AFMC has its own entrance examination for admission to its undergraduate program, which includes a written test, interview, and medical examination conducted by the institute. For postgraduate programs (MD/MS), candidates must have a valid NEET PG (National Eligibility cum Entrance Test for Post-Graduation) score. Admission is based on NEET PG scores and may include a written test and/or interview conducted by the institute.",
  placement: "AFMC Pune offers internship and residency programs as part of its undergraduate and postgraduate medical education. Graduates from AFMC Pune have excellent career prospects and serve in various capacities within the Indian Armed Forces as well as in public and private healthcare organizations.",
  examType: "NEET",
   image1:"https://images.shiksha.com/mediadata/images/1551685438phpjQSd6u.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1587705739phpwvAhjw.jpeg"
}),
new University({
  name: "Sir JJ College of Architecture, Mumbai",
  description: "Established in 1857, Sir JJ College of Architecture (SJJCA) is a premier Institute located in Mumbai, Maharashtra. A leading institute in the city with degree courses in the field of architecture. India Today ranked SJJCA on the 4th spot in its 2023 rankings for Architecture category. In addition, it has also been ranked 2nd in the top 10 government colleges with the lowest fees in a ranking given by India Today. JJ College of Architecture is a premier institute for BArch courses. The program is offered in full-time mode. The courses offered by the institute are recognized by approving bodies like AICTE.",
  ranking: "India Today (Architecture): 4",
  contact: {
    address: "Sir JJ College of Architecture, Dr. D.N. Road, Fort, Mumbai - 400001, Maharashtra, India.",
    phone: "+91-22-2262-1649",
    email: "principal@jjarchitecture.ac.in",
    website: "http://www.sirjjarchitecture.org/"
  },
  eligibility: "For undergraduate programs (B.Arch), candidates need to qualify for the NATA (National Aptitude Test in Architecture) conducted by the Council of Architecture (COA). For postgraduate programs (M.Arch), candidates must meet the eligibility criteria specified by Sir JJ College of Architecture, which may include academic qualifications, entrance exam scores, and/or relevant work experience.",
  placement: "Sir JJ College of Architecture has a dedicated Placement Cell that facilitates internships and placement opportunities for students. The college has strong industry connections and collaborations with architecture firms, urban planning agencies, government organizations, and research institutions, providing students with diverse career opportunities in the field of architecture and urban design. Sir JJ College of Architecture organizes a placement program as an ongoing part of quality Architectural education. As per the data fetched from the Shiksha student’s reviews, the highest package offered to the 2022 passing out BArch batch was INR 18 LPA and the average package stood at INR 8 LPA. Some of the well-known roles offered during Sir JJ College of Architecture placements 2022 were Assistant Professor, Project Manager, Architectural Designer, Landscape Architect, Urban Planner, etc.",
  examType: "NATA",
   image1:"https://images.shiksha.com/mediadata/images/1705410536phpDKVSJH.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1650880479phphiOaSt.jpeg"
}),
new University({
  name: "Chandigarh College of Architecture, Chandigarh",
  description: "Chandigarh College of Architecture, established in the year 1961, is a renowned educational institution located in Chandigarh, Punjab. It provides a wide range of Degree programs, including UG and PG options. These programs are approved by the AICTE and delivered to students in Full-Time mode, and are taught by experienced faculty members. Students at the institute can choose from various courses such as B.Arch, M.Arch. These courses cover fields like Architecture & Planning. The institute aims to provide quality education at an affordable fee, making it accessible to aspiring candidates with a seat count of 60. Students have the opportunity to gain valuable knowledge and skills in their chosen areas of interest. The fee for the courses offered by the institute ranges between INR 100,000. Additionally, the institute offers excellent infrastructure facilities to support students' learning experiences, such as Boys Hostel, Cafeteria, Girls Hostel, Gym, Hostel, Labs, Library, Sports Complex, Wi-Fi Campus, etc.",
  ranking: "India Today (Architecture): 10",
  contact: {
    address: "Chandigarh College of Architecture, Sector 12, Chandigarh - 160012, India.",
    phone: "+91-172-274-0685",
    email: "principalcca@yahoo.co.in",
    website: "https://www.cca.edu.in/"
  },
  eligibility: "For undergraduate programs (B.Arch), candidates need to qualify for the NATA (National Aptitude Test in Architecture) conducted by the Council of Architecture (COA). For postgraduate programs (M.Arch), candidates must meet the eligibility criteria specified by Chandigarh College of Architecture, which may include academic qualifications, entrance exam scores, and/or relevant work experience.",
  placement: "Chandigarh College of Architecture has a dedicated Training and Placement Cell that facilitates internships and placement opportunities for students. The college has strong industry connections and collaborations with architecture firms, urban planning agencies, government organizations, and research institutions, providing students with diverse career opportunities in the field of architecture and urban design.",
  examType: "NATA",
   image1:"https://images.shiksha.com/mediadata/images/1563372131phpdxWVaO.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1563372161phpi7ljo4.jpeg"
}),
new University({
  name: "School of Architecture and Planning, Anna University, Chennai",
  description: "School of Architecture and Planning (SAP), Anna University, Chennai, is a leading institution for architecture and planning education located in Chennai, Tamil Nadu, India. Established in 1957, it is affiliated with Anna University and offers undergraduate, postgraduate, and doctoral programs in architecture, planning, and related fields. The school is known for its academic excellence, research contributions, and focus on sustainable and inclusive urban development.",
  ranking: "India Today (Architecture): 5",
  contact: {
    address: "School of Architecture and Planning, Anna University, Sardar Patel Road, Guindy, Chennai - 600025, Tamil Nadu, India.",
    phone: "+91-44-2235-1740",
    email: "dean.sap@annauniv.edu",
    website: "https://www.annauniv.edu/SAP/"
  },
  eligibility: "For undergraduate programs (B.Arch), candidates need to qualify for the NATA (National Aptitude Test in Architecture) conducted by the Council of Architecture (COA).For postgraduate programs (M.Arch/M.Plan), candidates must meet the eligibility criteria specified by SAP Anna University, which may include academic qualifications, entrance exam scores, and/or relevant work experience."
  ,
  placement: "SAP Anna University has a dedicated Placement Cell that facilitates internships and placement opportunities for students. The school has strong industry connections and collaborations with architecture firms, urban planning agencies, government organizations, and research institutions, providing students with diverse career opportunities in the field of architecture and urban design.",
  examType: "NATA",
   image1:"https://images.shiksha.com/mediadata/images/1511854326phpLm2wma.png",
    image2:"https://images.shiksha.com/mediadata/images/1511854353phpdlCBgi.png"
}),
new University({
  name: "Institute of Hotel Management (IHM), Mumbai",
  description: "Commonly known as IHM Mumbai, the Institute of Hotel Management, Catering Technology and Applied Nutrition is an autonomous hospitality institute in Dadar West (Mumbai), operating under the Ministry of Tourism (Govt. of India). Established in 1954 by the All India Women's Central Food Council, it is one of the most prestigious institutes in the respective category of institutions in South East Asia. It was formerly known as the Dadar Catering College. The institute offers a BSc programme in Hospitality and Hotel Administration, comprising the curriculum formulated in collaboration with the National Council for Hotel Management & Catering Technology (NCHMCT) and IGNOU. It also offers a UG Diploma and two Certificate courses. Besides this, IHM Mumbai offers five short courses under the programme titled ‘Hunar Se Rozgar’.",
  ranking: "India Today (Hotel Management): 5",
  contact: {
    address: "Institute of Hotel Management, Dadar Catering College, Veer Savarkar Marg, Dadar West, Mumbai - 400028, Maharashtra, India.",
    phone: "+91-22-2445-7241",
    email: "principal@ihmctan.edu",
    website: "https://www.ihmctan.edu/"
  },
  eligibility: "For undergraduate programs in hotel management (B.Sc. Hospitality and Hotel Administration), candidates need to qualify for the Joint Entrance Examination (JEE) conducted by the National Testing Agency (NTA) followed by centralized counseling conducted by NCHMCT. For postgraduate programs in hotel management, candidates must meet the eligibility criteria specified by IHM Mumbai, which may include academic qualifications, entrance exam scores, and/or relevant work experience.",
  placement: "IHM Mumbai has a dedicated Training and Placement Cell that facilitates internships and placement opportunities for students. The institute has strong industry connections and collaborations with leading hotel chains, hospitality companies, and catering establishments, providing students with diverse career opportunities in the field of hotel management and hospitality. IHM Mumbai placement report 2023 is yet to be released on the official website. Once it is released, the placement details for the Class of 2023 will be updated here. However, IHM Mumbai has successfully concluded its placement drive for the batch passed out in 2021. As per the annual report 2021, the highest and minimum package offered during IHM Mumbai placement 2021 was INR 3.12 LPA and INR 1.20 LPA, respectively. Further, 20 recruiters participated in the placement process and placed 119 students in various job profiles. The top recruiters of IHM Mumbai in 2021 included Domino’s, Kouzina, Growisto, Taj Santacruz, Le Meridien, The Oberoi, etc.",
  examType: "NCHMCT JEE ",
   image1:"https://images.shiksha.com/mediadata/images/1651647342phpmUbsmE.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1651647780phpqDw7sp.jpeg"
}),
new University({
  name: "Institute of Hotel Management (IHM), Delhi",
  description: "The Institute of Hotel Management (IHM) Delhi is a premier institution for hotel management education located in New Delhi, India. Established in 1962, it is affiliated with the National Council for Hotel Management and Catering Technology (NCHMCT) and offers undergraduate and postgraduate programs in hotel management and catering technology. IHM Delhi is known for its academic excellence, state-of-the-art infrastructure, and industry-oriented curriculum.",
  ranking: "India Today (Hotel Management): 2",
  contact: {
    address: "Institute of Hotel Management, Pusa, New Delhi - 110012, India.",
    phone: "+91-11-2584-2801",
    email: "ihmpusa@ihmpusa.net",
    website: "https://www.ihmpusa.net/"
  },
  eligibility: "For undergraduate programs in hotel management (B.Sc. Hospitality and Hotel Administration), candidates need to qualify for the Joint Entrance Examination (JEE) conducted by the National Testing Agency (NTA) followed by centralized counseling conducted by NCHMCT. For postgraduate programs in hotel management, candidates must meet the eligibility criteria specified by IHM Delhi, which may include academic qualifications, entrance exam scores, and/or relevant work experience.",
  placement: "IHM Delhi has a dedicated Training and Placement Cell that facilitates internships and placement opportunities for students. The institute has strong industry connections and collaborations with leading hotel chains, hospitality companies, and catering establishments, providing students with diverse career opportunities in the field of hotel management and hospitality. IHM Pusa placement guidelines 2023-24 is released. Candidates can go through the guidelines here - IHM-Pusa-Placement-GuideLines-2023-24. Further, IHM Pusa has released the placement report 2023 for MSc HA and BSc HHA courses. The highest and average package offered during IHM Pusa placements 2023 stood at INR 9 LPA and INR 3.81 LPA, respectively. Further, a total of 54 companies visited the campus and 275 students were placed during IHM Pusa placements 2023.",
  examType: "NCHMCT JEE ",
   image1:"https://images.shiksha.com/mediadata/images/1550569930phpUOtl3i.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1653278566phpEEksyv.jpeg"
}),
new University( {
  name: "Institute of Hotel Management (IHM), Bangalore",
  description: "The Institute of Hotel Management (IHM) Bangalore is a premier institution for hotel management education located in Bangalore, Karnataka, India. Established in 1969, it is affiliated with the National Council for Hotel Management and Catering Technology (NCHMCT) and offers undergraduate and postgraduate programs in hotel management and catering technology. IHM Bangalore is known for its academic excellence, state-of-the-art infrastructure, and industry-oriented curriculum.",
  ranking: "India Today (Hotel Management): 4",
  contact: {
    address: "Institute of Hotel Management, S.J. Polytechnic Campus, Seshadri Road, Bangalore - 560001, Karnataka, India.",
    phone: "+91-80-2226-2960",
    email: "ihmblr@gmail.com",
    website: "https://www.ihmbangalore.kar.nic.in/"
  },
  eligibility: "For undergraduate programs in hotel management (B.Sc. Hospitality and Hotel Administration), candidates need to qualify for the Joint Entrance Examination (JEE) conducted by the National Testing Agency (NTA) followed by centralized counseling conducted by NCHMCT. For postgraduate programs in hotel management, candidates must meet the eligibility criteria specified by IHM Bangalore, which may include academic qualifications, entrance exam scores, and/or relevant work experience.",
  placement: "IHM Bangalore has a dedicated Training and Placement Cell that facilitates internships and placement opportunities for students. The institute has strong industry connections and collaborations with leading hotel chains, hospitality companies, and catering establishments, providing students with diverse career opportunities in the field of hotel management and hospitality.",
  examType: "NCHMCT JEE ",
   image1:"https://images.shiksha.com/mediadata/images/1619432267phpHhr6ia.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1502949289phpkC91jc.jpeg"
}),
new University({
  name: "University of Delhi, Delhi",
  description: "The University of Delhi, also known as Delhi University (DU), is a prestigious public central university located in New Delhi, India. Established in 1922, DU offers undergraduate, postgraduate, and doctoral programs across various fields such as arts, science, commerce, engineering, law, and social sciences. The university is renowned for its high academic standards, diverse student body, and eminent faculty.",
  ranking: "NIRF (University): 13",
  contact: {
    address: "University of Delhi, Benito Juarez Marg, South Campus, South Moti Bagh, New Delhi - 110021, India.",
    phone: "+91-11-2700-6900",
    email: "vc@du.ac.in",
    website: "http://www.du.ac.in/"
  },
  eligibility: "For undergraduate programs, candidates need to meet the eligibility criteria specified by the respective departments, which may include academic qualifications and entrance exam scores. For postgraduate programs, candidates must meet the eligibility criteria specified by the respective departments, which may include academic qualifications, entrance exam scores, and/or relevant work experience.",
  placement: "The University of Delhi has a dedicated Central Placement Cell (CPC) that facilitates internships and placement opportunities for students. The university has strong industry connections and collaborations with leading companies and organizations, providing students with diverse career opportunities. The highest and average package offered during the 2023 placement season were INR 39.2 LPA and INR 7.4 LPA, respectively. Top recruiters included McKinsey & Company, Deloitte, EY, KPMG, and Boston Consulting Group.",
  examType:"CUET (UG)",
   image1:"https://images.shiksha.com/mediadata/images/1701688215phpnDDUn8.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1569850653phpi3sDUn.jpeg"
}),
new University({
  name: "Jawaharlal Nehru University (JNU), Delhi",
  description: "Jawaharlal Nehru University (JNU) is a renowned public central university located in New Delhi, India. Established in 1969, JNU offers undergraduate, postgraduate, and doctoral programs across various disciplines, including arts, science, social sciences, and international studies. The university is known for its strong emphasis on research, academic excellence, and social justice.",
  ranking: "NIRF (University): 2",
  contact: {
    address: "Jawaharlal Nehru University, New Mehrauli Road, New Delhi - 110067, India.",
    phone: "+91-11-2670-4090",
    email: "vc@mail.jnu.ac.in",
    website: "https://www.jnu.ac.in/"
  },
  eligibility: "For undergraduate programs, candidates need to qualify for the JNU Entrance Examination (JNUEE) conducted by the National Testing Agency (NTA) followed by centralized counseling. For postgraduate programs, candidates must meet the eligibility criteria specified by the respective departments, which may include academic qualifications, entrance exam scores, and/or relevant work experience.",
  placement: "JNU has a dedicated Placement Cell that facilitates internships and placement opportunities for students. The university has strong industry connections and collaborations with leading companies and organizations, providing students with diverse career opportunities. The highest and average package offered during the 2023 placement season were INR 28 LPA and INR 6.5 LPA, respectively. Top recruiters included Google, Microsoft, Infosys, Wipro, and IBM.",
  examType: "CUET (UG)",
   image1:"https://images.shiksha.com/mediadata/images/1653281063php1tWVm2.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1557813434phpvpRsXk.jpeg"
}),
new University({
  name: "Banaras Hindu University (BHU), Varanasi",
  description: "Banaras Hindu University (BHU) is a prestigious public central university located in Varanasi, Uttar Pradesh, India. Established in 1916 by Pandit Madan Mohan Malaviya, BHU offers undergraduate, postgraduate, and doctoral programs across various fields such as arts, science, commerce, engineering, law, and social sciences. The university is renowned for its rich cultural heritage, academic excellence, and diverse student body.",
  ranking: "NIRF (University): 6",
  contact: {
    address: "Banaras Hindu University, Varanasi - 221005, Uttar Pradesh, India.",
    phone: "+91-542-670-1413",
    email: "vc@bhu.ac.in",
    website: "http://www.bhu.ac.in/"
  },
  eligibility: "For undergraduate programs, candidates need to qualify for the Undergraduate Entrance Test (UET) conducted by BHU. For postgraduate programs, candidates need to qualify for the Postgraduate Entrance Test (PET) conducted by BHU.",
  placement: "BHU has a dedicated Placement Cell that facilitates internships and placement opportunities for students. The university has strong industry connections and collaborations with leading companies and organizations, providing students with diverse career opportunities. The highest and average package offered during the 2023 placement season were INR 14 LPA and INR 5.8 LPA, respectively. Top recruiters included TCS, Infosys, Wipro, Accenture, and ICICI Bank.",
  examType: "CUET (UG)",
   image1:"https://images.shiksha.com/mediadata/images/1698215762phpob8TqJ.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1488180301php074eaN.jpeg"
}),
new University({
  name: "National Academy of Legal Studies and Research (NALSAR), Hyderabad",
  description: "National Academy of Legal Studies and Research (NALSAR) is a premier law university located in Hyderabad, Telangana, India. Established in 1998, NALSAR offers undergraduate, postgraduate, and doctoral programs in law and legal studies. The university is known for its rigorous academic curriculum, distinguished faculty, and emphasis on research and legal education.",
  ranking: "NIRF (Law): 3",
  contact: {
    address: "Justice City, Shameerpet, Ranga Reddy District, Hyderabad - 500101, Telangana, India.",
    phone: "+91-40-2349-8200",
    email: "registrar@nalsar.ac.in",
    website: "https://www.nalsar.ac.in/"
  },
  eligibility: "For undergraduate programs (BA LLB, BBA LLB), candidates need to qualify for the Common Law Admission Test (CLAT) conducted by the Consortium of National Law Universities. For postgraduate programs (LLM, MPhil, PhD), candidates must meet the eligibility criteria specified by NALSAR, which may include academic qualifications, CLAT scores, and/or relevant work experience.",
  placement: "NALSAR has a dedicated Placement and Internship Cell that facilitates internships and placement opportunities for students. The university has strong ties with law firms, corporate legal departments, and international organizations, offering students diverse career opportunities in the legal field. Detailed placement statistics for the recent years are available on the university's official website.",
  examType:"LSAT India",
   image1:"https://images.shiksha.com/mediadata/images/1533275704php285czb.png",
    image2:"https://images.shiksha.com/mediadata/images/1660980342phpZ4zy6H.jpeg"
}),
new University({
  name: "National Law University (NLU), Delhi",
  description: "National Law University (NLU), Delhi, is a leading law university located in New Delhi, India. Established in 2008, NLU Delhi offers undergraduate, postgraduate, and doctoral programs in law and legal studies. The university is known for its innovative curriculum, experienced faculty, and emphasis on interdisciplinary legal education and research.",
  ranking: "NIRF (Law): 2",
  contact: {
    address: "Sector 14, Dwarka, New Delhi - 110078, India.",
    phone: "+91-11-2803-4257",
    email: "info@nludelhi.ac.in",
    website: "https://www.nludelhi.ac.in/"
  },
  eligibility: "For undergraduate programs (BA LLB, BBA LLB), candidates need to qualify for the Common Law Admission Test (CLAT) conducted by the Consortium of National Law Universities. For postgraduate programs (LLM, PhD), candidates must meet the eligibility criteria specified by NLU Delhi, which may include academic qualifications, CLAT scores, and/or relevant work experience.",
  placement: "NLU Delhi has a dedicated Centre for Corporate Law Studies (CCLS) that oversees placements and internships. The university has strong industry connections with law firms, corporate legal departments, and international organizations, providing students with diverse career opportunities in the legal field. Detailed placement reports for recent years are available on the university's official website.",
  examType:"LSAT India",
   image1:"https://images.shiksha.com/mediadata/images/1666691277phpr2eHsi.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1533106283phpFxzdWi.jpeg"
}),
new University({
  name: "Symbiosis Law School, Pune",
  description: "Symbiosis Law School, Pune, is a prominent institution for legal education located in Pune, Maharashtra, India. Established in 1977, it is affiliated with Symbiosis International (Deemed University) and offers undergraduate, postgraduate, and diploma programs in law and legal studies. The law school is known for its holistic approach to legal education, international collaborations, and emphasis on practical learning.",
  ranking: "NIRF (Law): 10",
  contact: {
    address: "Symbiosis Vishwabhavan, Senapati Bapat Road, Pune - 411004, Maharashtra, India.",
    phone: "+91-20-2565-5114",
    email: "info@symlaw.ac.in",
    website: "https://www.symlaw.ac.in/"
  },
  eligibility: "For undergraduate programs (BA LLB, BBA LLB), candidates need to qualify for the Symbiosis Law Admission Test (SLAT) conducted by Symbiosis International (Deemed University). For postgraduate programs (LLM), candidates must meet the eligibility criteria specified by Symbiosis Law School, Pune, which may include academic qualifications, SLAT scores, and/or relevant work experience.",
  placement: "Symbiosis Law School, Pune, has a dedicated Placement Cell that coordinates internships and placements for students. The law school has strong ties with law firms, corporate legal departments, and international organizations, providing students with ample opportunities for internships and job placements. Detailed placement reports are available on the law school's official website.",
  examType:"LSAT India",
   image1:"https://images.shiksha.com/mediadata/images/1614139585phpangLQL.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1515589137phpueQDwU.png"
}),
new University({
  name: "National Institute of Fashion Technology (NIFT), Delhi",
  description: "National Institute of Fashion Technology (NIFT), Delhi, is a premier fashion institute located in New Delhi, India. Established in 1986, NIFT Delhi offers undergraduate, postgraduate, and diploma programs in fashion design, technology, management, and communication. The institute is renowned for its innovative curriculum, industry-oriented approach, and state-of-the-art facilities.",
  ranking: "NIRF (Fashion Design): 1",
  contact: {
    address: "Hauz Khas, Near Gulmohar Park, New Delhi - 110016, India.",
    phone: "+91-11-2654-2100",
    email: "nift.delhi@nift.ac.in",
    website: "https://www.nift.ac.in/delhi/"
  },
  eligibility: "For undergraduate programs (B.Des), candidates need to qualify for the NIFT Entrance Exam conducted by the National Institute of Fashion Technology. For postgraduate programs (M.Des), candidates must meet the eligibility criteria specified by NIFT Delhi, which may include academic qualifications, NIFT Entrance Exam scores, and/or relevant work experience.",
  placement: "NIFT Delhi has a dedicated Placement Cell that facilitates internships and placement opportunities for students. The institute has strong industry connections with leading fashion brands, design houses, and retail companies, offering students diverse career opportunities in the fashion and apparel industry. Detailed placement reports for recent years are available on the institute's official website.",
  examType:"NIFT Entrance",
   image1:"https://images.shiksha.com/mediadata/images/1701857341phpKhVT4F.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1546594519phpjsATzb.png"
}),
new University({
  name: "National Institute of Fashion Technology (NIFT), Bengaluru",
  description: "National Institute of Fashion Technology (NIFT), Bengaluru, is a prominent fashion institute located in Bengaluru, Karnataka, India. Established in 1986, NIFT Bengaluru offers undergraduate, postgraduate, and diploma programs in fashion design, technology, management, and communication. The institute is known for its creative environment, industry collaborations, and emphasis on practical learning.",
  ranking: "NIRF (Fashion Design): 6",
  contact: {
    address: "CA Site No. 21, Sector-1, 27th Main Road, HSR Layout, Bengaluru - 560102, Karnataka, India.",
    phone: "+91-80-2255-2551",
    email: "nift.bengaluru@nift.ac.in",
    website: "https://www.nift.ac.in/bengaluru/"
  },
  eligibility: "For undergraduate programs (B.Des), candidates need to qualify for the NIFT Entrance Exam conducted by the National Institute of Fashion Technology. For postgraduate programs (M.Des), candidates must meet the eligibility criteria specified by NIFT Bengaluru, which may include academic qualifications, NIFT Entrance Exam scores, and/or relevant work experience.",
  placement: "NIFT Bengaluru has a dedicated Training and Placement Cell that coordinates internships and placements for students. The institute has strong ties with leading fashion brands, design firms, and retail companies, providing students with extensive opportunities for internships and job placements. Detailed placement reports are available on the institute's official website.",
  examType:"NIFT Entrance",
   image1:"https://images.shiksha.com/mediadata/images/1711966414phpRaoIoG.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1711966545phpZa0GR5.jpeg"
}),
new University({
  name: "National Institute of Fashion Technology (NIFT), Chennai",
  description: "National Institute of Fashion Technology (NIFT), Chennai, is a prestigious fashion institute located in Chennai, Tamil Nadu, India. Established in 1995, NIFT Chennai offers undergraduate, postgraduate, and diploma programs in fashion design, technology, management, and communication. The institute is recognized for its industry-relevant curriculum, experienced faculty, and creative learning environment.",
  ranking: "NIRF (Fashion Design): 9",
  contact: {
    address: "Taramani, Chennai - 600113, Tamil Nadu, India.",
    phone: "+91-44-2254-0715",
    email: "nift.chennai@nift.ac.in",
    website: "https://www.nift.ac.in/chennai/"
  },
  eligibility: "For undergraduate programs (B.Des), candidates need to qualify for the NIFT Entrance Exam conducted by the National Institute of Fashion Technology. For postgraduate programs (M.Des), candidates must meet the eligibility criteria specified by NIFT Chennai, which may include academic qualifications, NIFT Entrance Exam scores, and/or relevant work experience.",
  placement: "NIFT Chennai has a dedicated Placement Cell that assists students in securing internships and placements. The institute has strong industry connections with fashion houses, apparel brands, and retail companies, offering students ample opportunities for internships and job placements. Detailed placement reports are available on the institute's official website.",
  examType:"NIFT Entrance",
   image1:"https://images.shiksha.com/mediadata/images/1649139962phpeDYQDW.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1649139981phpBjt5Tb.jpeg"
}),
new University({
  name: "Vellore Institute of Technology (VIT), Vellore",
  description: "Vellore Institute of Technology (VIT), Vellore, is a prestigious private institution located in Vellore, Tamil Nadu, India. Established in 1984, VIT Vellore offers undergraduate, postgraduate, and doctoral programs in engineering, technology, management, and applied sciences. The institute is known for its world-class infrastructure, innovative teaching methods, and strong industry connections.",
  ranking: "NIRF (Engineering): 15, NIRF (Overall): 16",
  contact: {
    address: "Vellore Institute of Technology, Near Katpadi Road, Vellore - 632014, Tamil Nadu, India.",
    phone: "+91-416-220-2020",
    email: "admission@vit.ac.in",
    website: "https://www.vit.ac.in/"
  },
  eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the VITEEE (VIT Engineering Entrance Exam) conducted by VIT University. For postgraduate programs (M.Tech/MBA/MCA), candidates must meet the eligibility criteria specified by VIT Vellore, which may include academic qualifications, VITEEE scores, and/or relevant work experience.",
  placement: "VIT Vellore has a dedicated Placement & Training Centre that facilitates internships and placement opportunities for students. The institute maintains strong relationships with top companies across various sectors, ensuring high placement rates for graduates. Detailed placement reports are available on the institute's official website.",
  examType:"VITEEE",
   image1:"https://images.shiksha.com/mediadata/images/1602838247phpfl7zvY.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1664721059phpQKCqHM.jpeg"
}),
new University({
  name: "VIT Chennai",
  description: "Vellore Institute of Technology (VIT), Chennai, is an extension campus of VIT University located in Chennai, Tamil Nadu, India. Established in 2010, VIT Chennai offers undergraduate and postgraduate programs in engineering, management, and applied sciences. The campus is known for its modern facilities, experienced faculty, and student-centric approach to education.",
  ranking: "NIRF (Engineering): 32",
  contact: {
    address: "VIT Chennai Campus, Vandalur - Kelambakkam Road, Chennai - 600127, Tamil Nadu, India.",
    phone: "+91-44-3993-1555",
    email: "admission.chennai@vit.ac.in",
    website: "https://chennai.vit.ac.in/"
  },
  eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the VITEEE (VIT Engineering Entrance Exam) conducted by VIT University. For postgraduate programs (M.Tech/MBA), candidates must meet the eligibility criteria specified by VIT Chennai, which may include academic qualifications, VITEEE scores, and/or relevant work experience.",
  placement: "VIT Chennai has a dedicated Career Development Centre that assists students in securing internships and placements. The campus has collaborations with industry leaders and offers students opportunities to engage in practical learning experiences. Detailed placement reports are available on the institute's official website.",
  examType:"VITEEE",
   image1:"https://images.shiksha.com/mediadata/images/1665354087phpykbeE4.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1509707292phpW0MYGJ.jpeg"
}),
new University({
  name: "VIT Bhopal",
  description: "Vellore Institute of Technology (VIT), Bhopal, is a branch campus of VIT University located in Bhopal, Madhya Pradesh, India. Established in 2017, VIT Bhopal offers undergraduate and postgraduate programs in engineering, management, and applied sciences. The campus is equipped with modern infrastructure, laboratories, and research facilities, providing students with a conducive learning environment.",
  ranking: "Not Ranked",
  contact: {
    address: "VIT Bhopal University, Kothri Kalan, Sehore - 462044, Madhya Pradesh, India.",
    phone: "+91-755-3021-200",
    email: "admission@vitbhopal.ac.in",
    website: "https://bhopal.vit.ac.in/"
  },
  eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the VITEEE (VIT Engineering Entrance Exam) conducted by VIT University. For postgraduate programs (M.Tech/MBA), candidates must meet the eligibility criteria specified by VIT Bhopal, which may include academic qualifications, VITEEE scores, and/or relevant work experience.",
  placement: "VIT Bhopal has a dedicated Career Development Centre that supports students in securing internships and placements. The campus collaborates with industry partners to provide practical training and career opportunities to students. Detailed placement reports are available on the institute's official website.",
  examType:"VITEEE",
   image1:"https://images.shiksha.com/mediadata/images/1679576840phpHA1qkZ.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1601024684phpAy3fJ6.jpegX"
}),
new University({
  name: "Indian Institute of Mass Communication (IIMC), Delhi",
  description: "The Indian Institute of Mass Communication (IIMC), Delhi, is a premier institution for mass communication education and research located in New Delhi, India. Established in 1965, IIMC offers postgraduate diploma programs in various disciplines of mass communication, journalism, advertising, and public relations. The institute is known for its rigorous curriculum, experienced faculty, and state-of-the-art facilities.",
  ranking: "Ranked 1 in IIMC",
  contact: {
    address: "Indian Institute of Mass Communication, JNU New Campus, Aruna Asaf Ali Marg, New Delhi - 110067, India.",
    phone: "+91-11-2674-5466",
    email: "info@iimc.nic.in",
    website: "http://www.iimc.nic.in/"
  },
  eligibility: "For postgraduate diploma programs, candidates must meet the eligibility criteria specified by IIMC, which may include academic qualifications, entrance exam scores, and/or relevant work experience. Each program may have specific eligibility requirements.",
  placement: "IIMC Delhi has a dedicated placement cell that facilitates internships and placement opportunities for students. The institute has strong industry connections and collaborations with media organizations, advertising agencies, and public relations firms, providing students with diverse career opportunities in the field of mass communication.",
  examType:"IIMC",
   image1:"https://images.shiksha.com/mediadata/images/1707217143phpakzT4s.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1502943664phpR7CgPO.png"
}),
new University({
  name: "Xavier Institute of Communications (XIC), Mumbai",
  description: "Xavier Institute of Communications (XIC), Mumbai, is a renowned institution offering courses in mass communication, advertising, and journalism. Established in [insert year], XIC is known for its industry-oriented curriculum, experienced faculty, and hands-on training approach. The institute aims to groom students for successful careers in media and communication.",
  ranking: "Ranked 2 in IIMC",
  contact: {
    address: "Xavier Institute of Communications, St. Xavier's College, 5, Mahapalika Marg, Mumbai - 400001, Maharashtra, India.",
    phone: "+91-22-2262-1639",
    email: "xic@xaviers.edu",
    website: "http://www.xaviercomm.org/"
  },
  eligibility: "For diploma and certificate programs, candidates must meet the eligibility criteria specified by XIC Mumbai, which may include academic qualifications and/or entrance exam scores. Specific eligibility details are available on the institute's official website.",
  placement: "XIC Mumbai has a dedicated placement cell that assists students in securing internships and placements in media houses, advertising agencies, and corporate communications departments. The institute's strong industry connections and alumni network contribute to high placement rates for graduates.",
  examType:"IIMC",
   image1:"https://images.shiksha.com/mediadata/images/1663912341phpTvJgJV.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1490082157phpjL6wg7.jpeg"
}),
new University({
  name: "AJK Mass Communication Research Centre, Jamia Millia Islamia, Delhi",
  description: "AJK Mass Communication Research Centre, Jamia Millia Islamia (JMI), Delhi, is a leading institution for mass communication and media studies in India. Established in [insert year], AJK MCRC offers undergraduate, postgraduate, and doctoral programs in mass communication, journalism, film studies, and new media. The centre is known for its academic excellence, research contributions, and state-of-the-art facilities.",
  ranking: "Ranked 3 in IIMC",
  contact: {
    address: "AJK Mass Communication Research Centre, Jamia Millia Islamia, Maulana Mohammad Ali Jauhar Marg, Jamia Nagar, New Delhi - 110025, India.",
    phone: "+91-11-2698-7285",
    email: "ajkmcrc@jmi.ac.in",
    website: "http://www.ajkmcrc.org/"
  },
  eligibility: "For undergraduate and postgraduate programs, candidates need to meet the eligibility criteria specified by AJK MCRC, which may include academic qualifications, entrance exam scores, and/or relevant work experience. Detailed eligibility requirements are available on the centre's official website.",
  placement: "AJK MCRC has a dedicated placement cell that facilitates internships and placement opportunities for students in media organizations, production houses, news agencies, and digital media firms. The centre's strong industry ties and alumni network contribute to successful placements for its graduates.",
  examType:"IIMC",
   image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuraJRLtwEi_sDsfWBQ07OSHtyWBOr7pT6rA&s",
    image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZSDiUo_FgpX72vtXzBa8gTnAQz-wz6QFaQ&s"
}),
new University({
  name: "Indian Institute of Science (IISc), Bangalore",
  description: "The Indian Institute of Science (IISc), Bangalore, is a premier research institution located in Bangalore, Karnataka, India. Established in 1909, IISc is renowned for its contributions to science and engineering research, education, and innovation. The institute offers undergraduate, postgraduate, and doctoral programs in various disciplines of science, engineering, and management.",
  ranking: "NIRF (Overall): 1, NIRF (University): 1",
  contact: {
    address: "Indian Institute of Science, CV Raman Road, Bangalore - 560012, Karnataka, India.",
    phone: "+91-80-2293-2004",
    email: "registrar@iisc.ac.in",
    website: "https://www.iisc.ac.in/"
  },
  eligibility: "For undergraduate programs, candidates must qualify through national entrance exams like JEE (Advanced) or KVPY followed by counseling. For postgraduate and doctoral programs, eligibility criteria vary by department and typically include academic qualifications, entrance exam scores, and/or relevant research experience.",
  placement: "IISc Bangalore has a dedicated Career Development Centre (CDC) that facilitates placements and internships for students across various disciplines. The institute has strong industry collaborations and a high placement record with leading companies, research organizations, and multinational corporations.",
  examType:"GATE",
   image1:"https://images.shiksha.com/mediadata/images/1702365357phpO9uMNx.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1530530969php7A1AEQ.jpeg"
}),
new University({
  name: "Indian Institute of Technology (IIT) Roorkee",
  description: "Indian Institute of Technology (IIT) Roorkee is one of the oldest and most prestigious technical institutions in India, located in Roorkee, Uttarakhand. Established in 1847 as the Thomason College of Civil Engineering, it was converted into IIT in 2001. IIT Roorkee offers undergraduate, postgraduate, and doctoral programs in engineering, architecture, applied sciences, and management.",
  ranking: "NIRF (Overall): 6, NIRF (Engineering): 6",
  contact: {
    address: "Indian Institute of Technology Roorkee, Roorkee - 247667, Uttarakhand, India.",
    phone: "+91-1332-285311",
    email: "registrar@iitr.ac.in",
    website: "https://www.iitr.ac.in/"
  },
  eligibility: "For undergraduate programs (B.Tech), candidates must qualify through JEE (Advanced) followed by centralized counseling. For postgraduate and doctoral programs, eligibility criteria vary by department and typically include academic qualifications, GATE scores (for M.Tech), and/or relevant research experience.",
  placement: "IIT Roorkee has a dedicated Placement Cell that coordinates placements and internships for students across disciplines. The institute boasts strong ties with industry leaders, government agencies, and research organizations, facilitating numerous career opportunities for its graduates.",
  examType:"GATE",
   image1:"https://images.shiksha.com/mediadata/images/1704287394phpTcMrK8.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1570610774php52UF0f.png"
}),
new University({
  name: "Indian Institute of Technology (IIT) Guwahati",
  description: "Indian Institute of Technology (IIT) Guwahati is an autonomous technical and research university located in Guwahati, Assam, India. Established in 1994, IIT Guwahati offers undergraduate, postgraduate, and doctoral programs in engineering, science, design, and humanities. The institute is known for its academic excellence, research output, and state-of-the-art infrastructure.",
  ranking: "NIRF (Overall): 7, NIRF (Engineering): 7",
  contact: {
    address: "Indian Institute of Technology Guwahati, Amingaon, North Guwahati, Guwahati - 781039, Assam, India.",
    phone: "+91-361-2583000",
    email: "info@iitg.ac.in",
    website: "https://www.iitg.ac.in/"
  },
  eligibility: "For undergraduate programs (B.Tech), candidates must qualify through JEE (Advanced) followed by centralized counseling. For postgraduate and doctoral programs, eligibility criteria vary by department and typically include academic qualifications, GATE scores (for M.Tech), and/or relevant research experience.",
  placement: "IIT Guwahati has a dedicated Career Development Centre (CDC) that assists students in securing placements and internships. The institute has strong industry collaborations and a robust campus recruitment process, ensuring excellent placement opportunities for its graduates.",
  examType:"GATE",
   image1:"https://images.shiksha.com/mediadata/images/1705408383phpu0lZQj.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1557308060phpUCn7yA.jpeg"
}),
new University({
  name: "Indian Institute of Management (IIM) Ahmedabad",
  description: "Indian Institute of Management Ahmedabad (IIM Ahmedabad) is a premier management institute located in Ahmedabad, Gujarat, India. Established in 1961, it is recognized globally for its academic excellence and leadership in management education. IIM Ahmedabad offers postgraduate, executive education, and doctoral programs in management and allied disciplines.",
  ranking: "NIRF (Management): 1, Financial Times Global MBA Ranking: 31 (2023)",
  contact: {
    address: "Indian Institute of Management Ahmedabad, Vastrapur, Ahmedabad - 380015, Gujarat, India.",
    phone: "+91-79-6632-4213",
    email: "webmaster@iima.ac.in",
    website: "https://www.iima.ac.in/"
  },
  eligibility: "For postgraduate programs (MBA), candidates must have a bachelor's degree with a minimum percentage or CGPA specified by IIM Ahmedabad. Admission is primarily based on the Common Admission Test (CAT) conducted by IIMs followed by personal interview and group discussion rounds.",
  placement: "IIM Ahmedabad has a dedicated Placement Committee that facilitates placements and internships for students. The institute has a stellar placement record with top companies from various sectors visiting the campus for recruitment. The average salary offered to graduates is among the highest in India, with prominent roles in consulting, finance, marketing, and operations.",
  examType:"MBA ",
   image1:"https://images.shiksha.com/mediadata/images/1701780028phpjNSG0M.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1505365788phpXJ5Yga.jpeg"
}),
new University({
  name: "Indian Institute of Management (IIM) Bangalore",
  description: "Indian Institute of Management Bangalore (IIM Bangalore) is one of India's leading management institutes located in Bangalore, Karnataka, India. Established in 1973, it is known for its academic rigor, research contributions, and innovation in management education. IIM Bangalore offers postgraduate, executive education, doctoral, and certificate programs in management.",
  ranking: "NIRF (Management): 2, Financial Times Global MBA Ranking: 35 (2023)",
  contact: {
    address: "Indian Institute of Management Bangalore, Bannerghatta Road, Bangalore - 560076, Karnataka, India.",
    phone: "+91-80-2658-2450",
    email: "info@iimb.ac.in",
    website: "https://www.iimb.ac.in/"
  },
  eligibility: "For postgraduate programs (MBA), candidates must have a bachelor's degree with a minimum percentage or CGPA specified by IIM Bangalore. Admission is primarily based on the Common Admission Test (CAT) conducted by IIMs followed by personal interview and group discussion rounds.",
  placement: "IIM Bangalore has a robust Career Development Services (CDS) department that assists students in securing placements and internships. The institute boasts strong industry connections and a high placement rate with top recruiters offering lucrative roles across sectors such as consulting, finance, technology, and e-commerce.",
  examType: "MBA",
   image1:"https://images.shiksha.com/mediadata/images/1701849078phpczKGsV.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1507192708phpjmkJLe.jpeg"
}),
new University({
  name: "Xavier Labour Relations Institute (XLRI), Jamshedpur",
  description: "Xavier Labour Relations Institute (XLRI), Jamshedpur, is a premier business school located in Jamshedpur, Jharkhand, India. Established in 1949, XLRI is renowned for its management education and research. It offers postgraduate and doctoral programs in management, human resources, and related fields.",
  ranking: "NIRF (Management): 9",
  contact: {
    address: "XLRI - Xavier School of Management, Circuit House Area (East), Jamshedpur - 831001, Jharkhand, India.",
    phone: "+91-657-665-3203",
    email: "admission@xlri.ac.in",
    website: "https://www.xlri.ac.in/"
  },
  eligibility: "For postgraduate programs (PGDM), candidates must have a bachelor's degree with a minimum percentage or CGPA specified by XLRI. Admission is based on entrance exams such as XAT (Xavier Aptitude Test) conducted by XLRI followed by group discussion and personal interview rounds.",
  placement: "XLRI Jamshedpur has a dedicated Placement Committee that facilitates placements and internships for students. The institute has a strong industry interface with leading companies across sectors visiting the campus for recruitment. XLRI graduates are known for securing high-paying roles in consulting, finance, human resources, and operations.",
  examType: "MBA",
   image1:"https://upload.wikimedia.org/wikipedia/commons/0/0e/Xlri_Campus%2C_Jamshedpur.jpg",
    image2:"https://content.jdmagicbox.com/comp/jamshedpur/89/0657p657std36089/catalogue/xavier-labour-relations-institute-circuit-house-jamshedpur-human-resource-management-institutes-1n1c4tq6l9.jpg"
}),
new University({
  name: "Management Development Institute (MDI), Gurgaon",
  description: "Management Development Institute (MDI), Gurgaon, is a premier business school located in Gurgaon, Haryana, India. Established in 1973, MDI is known for its management education, research, and industry collaboration. It offers postgraduate, executive education, doctoral, and certificate programs in management.",
  ranking: "NIRF (Management): 10",
  contact: {
    address: "Management Development Institute, Mehrauli Road, Sukhrali, Gurgaon - 122007, Haryana, India.",
    phone: "+91-124-456-0000",
    email: "info@mdi.ac.in",
    website: "https://www.mdi.ac.in/"
  },
  eligibility: "For postgraduate programs (PGPM/PGP-HRM/PGP-IM), candidates must have a bachelor's degree with a minimum percentage or CGPA specified by MDI. Admission is based on entrance exams such as CAT conducted by IIMs followed by group discussion and personal interview rounds.",
  placement: "MDI Gurgaon has a dedicated Placement Committee that facilitates placements and internships for students. The institute has strong ties with corporate recruiters and a high placement rate with diverse job profiles and attractive salary packages being offered to graduates.",
  examType: "MBA",
   image1:"https://officechai.com/wp-content/uploads/2017/01/1407580878102-MDI-Scholars.jpg",
    image2:"https://openthemagazine.com/wp-content/uploads/2022/12/MDI-Bldg-digital.jpg"
}),
new University({
  name: "Indian Maritime University (IMU), Chennai",
  description: "Indian Maritime University (IMU), Chennai, is a central university for maritime education and training in India. Established in 2008, IMU is recognized by the University Grants Commission (UGC) and offers a range of undergraduate, postgraduate, and doctoral programs in maritime studies, including naval architecture, marine engineering, nautical science, and maritime management.",
  ranking: "NIRF (Overall): 20",
  contact: {
    address: "Indian Maritime University, East Coast Road, Uthandi, Chennai - 600119, Tamil Nadu, India.",
    phone: "+91-44-2453-0343",
    email: "info@imu.ac.in",
    website: "https://www.imu.edu.in/"
  },
  eligibility: "For undergraduate programs, candidates must have passed 10+2 with physics, chemistry, and mathematics. Admission is based on IMU Common Entrance Test (CET) followed by counseling. For postgraduate programs, eligibility criteria vary by course and typically require a bachelor's degree in relevant disciplines.",
  placement: "IMU Chennai has a dedicated Placement Cell that facilitates placements and internships for students. The university collaborates with shipping companies, maritime organizations, and ports for placement opportunities. Graduates from IMU Chennai secure employment in various sectors of the maritime industry globally.",
  examType: "IMU CET",
   image1:"https://images.shiksha.com/mediadata/images/1653900987phpFk8uXp.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1482236902phpu65jPg.jpeg"
}),
new University({
  name: "Tolani Maritime Institute, Pune",
  description: "Tolani Maritime Institute (TMI), Pune, is a leading maritime institute in India offering courses in marine engineering and nautical science. Established in 1998, TMI is affiliated with the Indian Maritime University (IMU) and is renowned for its state-of-the-art facilities, experienced faculty, and comprehensive training programs.",
  ranking: "India Today (Engineering): 18",
  contact: {
    address: "Tolani Maritime Institute, Talegaon - Chakan Road, Induri, Talegaon, Pune - 410507, Maharashtra, India.",
    phone: "+91-2114-242-000",
    email: "info@tmi.tolani.edu",
    website: "https://www.tolani.edu/"
  },
  eligibility: "For undergraduate programs, candidates must have passed 10+2 with physics, chemistry, and mathematics. Admission is based on TMI Entrance Examination (TMISAT) followed by personal interview. For postgraduate programs, eligibility criteria include a bachelor's degree in relevant disciplines.",
  placement: "TMI Pune has a strong placement record with leading shipping companies visiting the campus for recruitment. The institute provides extensive pre-sea and post-sea training, enabling graduates to pursue successful careers in the global maritime industry.",
  examType: "IMU CET",
   image1:"https://images.shiksha.com/mediadata/images/1670592485phpNDDAu8.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1514265353phpGDoA3G.jpeg"
}),
new University({
  name: "International Maritime Institute (IMI), Greater Noida",
  description: "International Maritime Institute (IMI), Greater Noida, is a prominent maritime training institute in India. Established in [insert year], IMI offers undergraduate and postgraduate programs in marine engineering, nautical science, and maritime management. The institute is affiliated with the Indian Maritime University (IMU) and is known for its modern infrastructure and industry-relevant curriculum.",
  ranking: "NIRF (Overall): 35",
  contact: {
    address: "International Maritime Institute, 13, Knowledge Park I, Surajpur Kasna Road, Greater Noida - 201310, Uttar Pradesh, India.",
    phone: "+91-120-232-6312",
    email: "info@imi.edu.in",
    website: "https://www.imi.edu.in/"
  },
  eligibility: "For undergraduate programs, candidates must have passed 10+2 with physics, chemistry, and mathematics. Admission is based on IMI Entrance Examination followed by personal interview. For postgraduate programs, eligibility criteria include a bachelor's degree in relevant disciplines.",
  placement: "IMI Greater Noida has a dedicated Training and Placement Cell that assists students in securing internships and placements in reputed shipping companies, maritime organizations, and ports. The institute's strong industry connections ensure ample career opportunities for graduates.",
  examType: "IMU CET",
   image1:"https://images.shiksha.com/mediadata/images/1712138101phpnw6LEV.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1546930466phpR360hh.jpeg"
}),
new University({
  name: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
  description: "Veermata Jijabai Technological Institute (VJTI), located in Mumbai, Maharashtra, is one of the oldest engineering colleges in India. It offers undergraduate, postgraduate, and doctoral programs in engineering and technology.",
  ranking: "NIRF (Engineering): 69",
  contact: {
    address: "H.R. Mahajani Marg, Matunga, Mumbai - 400019, Maharashtra, India.",
    phone: "+91-22-2419-8102",
    email: "principal@vjti.ac.in",
    website: "https://www.vjti.ac.in/"
  },
  eligibility: "Admission criteria vary for different courses and are based on entrance exams and academic qualifications.",
  placement: "VJTI Mumbai has a dedicated placement cell that facilitates internships and placements. It has strong ties with industry, offering students ample career opportunities.",
  examType: "MHT CET",
   image1:"https://www.festivalsfromindia.com/wp-content/uploads/2022/04/VJTI-Mumbai.-Photo-VJTI-Mumbai-1_11zon.jpg",
    image2:"https://collegekeeda.com/wp-content/uploads/2023/12/VJTI-Mumbai-_3_.webp"
}),
new University({
  name: "Government College of Engineering, Aurangabad",
  description: "Government College of Engineering, Aurangabad, is a prominent engineering college in Maharashtra, offering various undergraduate and postgraduate programs in engineering disciplines.",
  ranking: "NIRF (Engineering): 121",
  contact: {
    address: "Station Road, Osmanpura, Aurangabad - 431005, Maharashtra, India.",
    phone: "+91-240-233-4721",
    email: "principal@gcoea.ac.in",
    website: "https://www.gcoea.ac.in/"
  },
  eligibility: "Admission criteria depend on entrance exam scores and academic qualifications specified for each course.",
  placement: "The college has a placement cell that facilitates internships and placements. Details about specific placement statistics may be available through official reports or inquiries to the college administration.",
  examType: "MHT CET",
   image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWbus0H4lp8lkxmeM4CrbJIEexDT5YLd-zQ&s",
    image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pufBVJV0SZHg9EewbotFfipCNCPEZBbzDQ&s"
}),
new University({
  name: "Government College of Engineering, Nagpur",
  description: "Government College of Engineering, Nagpur, is a leading engineering institution in Maharashtra, offering undergraduate and postgraduate programs in various engineering disciplines.",
  ranking: "NIRF (Engineering): 118",
  contact: {
    address: "Near Hanuman Nagar, Nagpur - 440009, Maharashtra, India.",
    phone: "+91-712-222-6750",
    email: "principal@gconag.ac.in",
    website: "http://gcoen.ac.in/"
  },
  eligibility: "Admission criteria vary for different courses and are based on entrance exams and academic qualifications.",
  placement: "The college has a dedicated placement cell that assists students in securing internships and placements. Specific placement statistics can be obtained from the college administration.",
  examType: "MHT CET",
   image1:"https://images.shiksha.com/mediadata/images/1651149107phpbKVnFh.jpeg",
    image2:"https://images.shiksha.com/mediadata/images/1651149140phpQ6JsC8.jpeg"
})
];



const users = [
  new User({
    username: "Manpreet",
    password:"manpreet1"
  }),
  new User({
    username: "Rikhil",
    password:"rikhil1"
  }),
  new User({
    username: "Aayush",
    password:"Aayush"
  }),
  new User({
    username: "Pranshu",
    password:"pranshu1"
  }),
  new User({
    username: "Dwij",
    password:"dwij1"
  }),
  new User({
    username: "Gurpreet",
    password:"gurpreet1"
  })
]

const exams = [
  new Exam({
    name: "JEE Main",
    description: "A national level entrance exam for admission to undergraduate engineering programs in NITs, IIITs, and other centrally funded technical institutions.",
    examShouldGive: null, // JEE Main does not require any specific exam before it
    examCanGive: "JEE Advanced", // Can give JEE Advanced after JEE Main
    image: "https://www.indianuniversities.net/assets/uploadFiles/study/IMG_20220221_170342.png"
    }),
  new Exam({
    name: "JEE Advanced",
    description: "The second stage of the Joint Entrance Examination, granting admission to the Indian Institutes of Technology (IITs) and some other prestigious engineering colleges.",
    examShouldGive: "JEE Main", // Should give JEE Advanced after JEE Main
    examCanGive: null, // No specific exam required after JEE Advanced
    image: "https://www.careerguide.com/career/wp-content/uploads/2023/05/JEE-Advance-Logo-300x228.webp"
  }),
  new Exam({
    name: "BITSAT",
    description: "Conducted for admission to undergraduate engineering programs at BITS Pilani, Goa, and Hyderabad campuses.",
    examShouldGive: null, // BITSAT does not require any specific exam before it
    examCanGive: "JEE Main", // No specific exam required after BITSAT
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/640px-BITS_Pilani-Logo.svg.png"
  }),
  new Exam({
    name: "NEET",
    description: "An entrance examination for admission to undergraduate medical and dental courses in government and private medical colleges in India.",
    examShouldGive: null, // NEET does not require any specific exam before it
    examCanGive:null,
    image: "https://www.seshaalinguatech.com/wp-content/uploads/2018/05/neet.jpg"
  }),
  new Exam({
    name: "NATA",
    description: "Required for admission to undergraduate architecture programs across participating institutions in India.",
    examShouldGive: null, // NATA does not require any specific exam before it
    examCanGive:null,  
    image: "https://seeklogo.com/images/N/nata-nata-logo-55C670AC62-seeklogo.com.png"
  }),
  new Exam({
    name: "NCHMCT JEE ",
    description: "Entrance exam for admission to undergraduate hospitality and hotel management courses at NCHMCT-affiliated institutions.",
    examShouldGive: null, // NCHMCT-JEE does not require any specific exam before it
    examCanGive:null,
    image: "https://www.kwteducation.com/wp-content/uploads/2023/02/National-Council-for-Hotel-Management-and-Catering-Technology-NCHMCT.png"

  }),
  new Exam({
    name: "CUET (UG)",
    description: "Conducted for admission to undergraduate programs at central universities across India.",
    examShouldGive: null, // CUET (UG) does not require any specific exam before it
    examCanGive:null,
    image:"https://lh5.googleusercontent.com/proxy/eo-tVW7fOgl3m0hp5dylLrmWgdWBVuOhgNcPfl-uKg4Y_CrYUk4KKXnw3s_jBxiVWA3_tgUFezaU8DMs24KkDGFvC5w0"  

  }),
  new Exam({
    name: "LSAT India",
    description: "For admission to undergraduate law programs in participating law schools in India.",
    examShouldGive: null, // LSAT India does not require any specific exam before it
    examCanGive:null,
    image:"https://static.wixstatic.com/media/1575b5_cb8a0cf0daa7469b9df69762013001eb~mv2.png/v1/fill/w_672,h_432,al_c,lg_1,q_85/1575b5_cb8a0cf0daa7469b9df69762013001eb~mv2.png"

  }),
  new Exam({
    name: "NIFT Entrance",
    description: "Entrance exam for admission to undergraduate programs in fashion and design at NIFT campuses.",
    examShouldGive: null, // NIFT Entrance does not require any specific exam before it
    examCanGive:null,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQfQUGUNetP70ClWIgXyj5MJUWy9moTtSdQ&s"

  }),
  new Exam({
    name: "VITEEE",
    description: "Conducted for admission to undergraduate engineering programs at Vellore Institute of Technology (VIT) campuses.",
    examShouldGive: null, // VITEEE does not require any specific exam before it
    examCanGive:null,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rP75x2yM5VFpH8cD3C_PX6DOdwmrmp1yrA&s"

  }),
  new Exam({
    name: "IIMC",
    description: "For admission to various postgraduate diploma courses in journalism and mass communication at Indian Institute of Mass Communication.",
    examShouldGive: null, // IIMC Entrance Exam does not require any specific exam before it
    examCanGive:null,
    image:"https://yt3.googleusercontent.com/YpK2wL57orxiGwd1GQHSgcrFP0QtNSJnXYUyXp7DFc5BrNNDnIPSZGT7MTDhG9wROL8HjaKk5g=s900-c-k-c0x00ffffff-no-rj"

  }),
  new Exam({
    name: "GATE",
    description: "A national level examination for admission to postgraduate programs in engineering and technology across India.",
    examShouldGive: null, // GATE does not require any specific exam before it
    examCanGive:null,
    image:"https://www.educationkey.in/wp-content/uploads/2022/11/gate.png"
  }),
  new Exam({
    name: "MBA",
    description: "Entrance exams like CAT, MAT, XAT, etc., for admission to MBA programs offered by various management institutes across India.",
    examShouldGive: null, // MBA does not require any specific exam before it
    examCanGive:null,
    image:"https://www.mim-essay.com/images/blogs/mba.png"

  }),
  new Exam({
    name: "MHT CET",
    description: "For admission to undergraduate courses in engineering, pharmacy, and agriculture in colleges in Maharashtra.",
    examShouldGive: null, // MHT CET does not require any specific exam before it
    examCanGive:null,
    image:"https://upload.wikimedia.org/wikipedia/en/6/60/MHT-CET_logo.png"
  }),
  new Exam({
    name: "IMU CET",
    description: "Entrance exam for admission to undergraduate programs in maritime studies and related fields at Indian Maritime University and its affiliated institutes.",
    examShouldGive: null, 
    examCanGive:null,
    image:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Indian_Maritime_University_logo.jpg"
  }),
];

const testimonial = [
  new Testimonial({
    username: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }),
  new Testimonial({
    username: "Jane Smith",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),
  new Testimonial({
    username: "Alice Johnson",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  }),
]

const FAQS = [
  new Faq ({
    question: "What is the purpose of this website?",
    answer: "This website is designed to help students and parents find the best universities and exams for their needs."
  }),
  new Faq ({
    question: "How can I contact the admin?",
    answer: "Contact details are given in the footer of the website."
  }),
new Faq ({
  question: "What are the eligibility criteria for the exams listed?",
  answer: "Eligibility criteria vary for each exam. Please refer to the specific exam's official website for detailed information."
}),
new Faq ({
  question: "Can international students apply for these exams?",
  answer: "Yes, international students can apply for certain exams, but they should check the specific exam guidelines on the official website."
}),
new Faq ({
  question: "Where can I find study materials for these exams?",
  answer: "Study materials can be found on the official exam websites, educational bookstores, and through various online platforms that offer courses and resources."
}),
new Faq ({
  question: "How do I register for an exam?",
  answer: "Registration can be completed on the official exam website. Make sure to register before the deadline to avoid any last-minute issues."
}),
new Faq ({
  question: "What is the fee structure for the exams?",
  answer: "The fee structure varies for each exam. Detailed information about fees can be found on the respective exam's official website."
})
]


University.insertMany(data)
  .then((docs)=>{
    console.log('====================================');
    console.log("Data Pushed");
    console.log('====================================');
  })
  .catch((err)=>{
    console.log('====================================');
    console.log(err);
    console.log('====================================');
  })
