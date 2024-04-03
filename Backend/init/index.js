const mongoose = require("mongoose");
const express = require('express');
const University = require("../models/university");
const User = require("../models/user");
const Exam = require("../models/exams");
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
    ranking: {
      NIRF_Overall: 53,
      NIRF_Engineering: 21,
      US_News_Overall: 59
    },
    contact: {
      address: "National Institute of Technology Warangal, Warangal - 506004, Telangana, India",
      phone: "+91-870-2459191",
      email: "info@nitw.ac.in",
      website: "https://www.nitw.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Main conducted by the National Testing Agency (NTA). Admission is based on the JEE Main ranks. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "NIT Warangal has a dedicated Training and Placement Cell (T&P Cell) that facilitates the placement process for students. The institute has an impressive placement record, with a high percentage of students securing job offers from reputed companies during campus placements. The highest and average package offered during NIT Warangal placements 2023 stood at INR 88 LPA and INR 17.29 LPA, respectively. Further, the overall placement rate recorded during NIT Warangal placements 2023 was 82%. A total of 268 companies visited the campus and 1,400 students were placed during NIT Warangal placements 2023. The top recruiters of NIT Warangal in 2023 included leading companies such as Amazon, Microsoft, and L&T.",
    examType: "JEE Main",
  }),
  new University({
    name: "NIT Jalandhar",
    description: "Dr. BR Ambedkar National Institute of Technology Jalandhar is a prestigious Engineering institute in India. NIT Jalandhar has been ranked 46th by NIRF 2023 in the 'Engineering' category and 72nd in the 'Overall' category. Additionally, the institute is ranked 21st in the Engineering (Government) category and 29th in the Engineering category by India Today 2023. Various international organisations have ranked NIT Jalandhar as well. The institute is ranked 1001-1200 in the World University category by Times Higher Education Rankings 2024. Established in the year 1987, the central government gave this institute the status of National Institute of Technology (Deemed University). The central government has renowned this institute as the 'Institute of National Importance'. Dr B R Ambedkar National Institute of Technology provides education at the undergraduate, doctoral and postgraduate levels in the fields of Science, Technology and Engineering. NITJ has 17 different academic departments, which include the Department of Biotechnology, Department of Physics, Department of Civil Engineering, etc. Furthermore, the institute also offers PG Diploma courses in various fields of Engineering, including Chemical Engineering, Industrial Engineering, Thermal Engineering, and Design Engineering.",
    ranking: {
      NIRF_Engineering: 46,
      NIRF_Overall: 72,
      Times_Higher_Education_World: "1001 - 1200"
    },
    contact: {
      address: "Dr. B.R. Ambedkar National Institute of Technology Jalandhar, GT Road, Bye Pass, Jalandhar - 144011, Punjab, India.",
      phone: "+91-181-2690301",
      email: "director@nitj.ac.in",
      website: "https://www.nitj.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Main conducted by the National Testing Agency (NTA). Admission is based on the JEE Main ranks. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and sometimes includes a written test and/or interview conducted by the institute.",
    placement: "NIT Jalandhar has a dedicated Training and Placement Cell (T&P Cell) that facilitates the placement process for students. The institute has a commendable placement record, with a high percentage of students securing job offers from reputed companies during campus placements. The placement process typically includes pre-placement talks, written tests, group discussions, technical and HR interviews, and final job offers. The highest package offered during placements in 2023 stood at INR 1.2 crore per annum. The institute is conducting its placement drive for the batch passing out in 2023. As of Mar 7, 2023, NIT Jalandhar recorded a 73.79% placement rate in the academic year 2022-2023. The average package offered during the NIT Jalandhar placement 2023 stood at INR 12.44 LPA, respectively. A total of 950 students were eligible for the placements, of which 701 students were placed in reputed companies. As per the latest report, the NIT Jalandhar CSE average package stood at INR 16.74 LPA. The top recruiters of 2023 included Microsoft, Google, Zscaler, BPCL, Goldman Sach, Accenture, TCS, Infosys, Wipro, etc.",
    examType: "JEE Main",
  }),
  new University({
    name: "NIT Trichy",
    description: "National Institute of Technology Tiruchirappalli is ranked 9th by NIRF 2023 under the Engineering category, 35th by NIRF 2023 under the Management category, and 4th by NIRF 2023 under the Architecture category. NIT Tiruchirappalli is ranked 781-790 by the QS World University Rankings 2024, 73 by the QS Asian University Rankings - Southern Asia category 2024, and 301-350 by the QS Asian University Rankings 2024 category. NIT Trichy formerly known as Regional Engineering College was established in 1964 as a joint venture of the Government of India and the Government of Tamil Nadu. National Institute of Technology Tiruchirappalli is approved by UGC, AICTE, and the Government of India. Some of the courses offered by NIT Tiruchirappalli are accredited by the NBA. NIT Trichy, through various departments, offers UG, PG, and various other courses to students, across the Engineering, Management, and various other streams. National Institute of Technology Tiruchirappalli (NIT Trichy) is one of the premier technical institutions in India.",
    ranking: {
      NIRF_Architecture: 4,
      NIRF_Engineering: 9,
      NIRF_Management: 35
    },
    contact: {
      address: "National Institute of Technology Tiruchirappalli, Tanjore Main Road, NH67, Near BHEL Trichy, Tiruchirappalli - 620015, Tamil Nadu, India.",
      phone: "+91-431-2503000",
      email: "deanac@nitt.edu",
      website: "https://www.nitt.edu/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Main conducted by the National Testing Agency (NTA). Admission is based on the JEE Main ranks. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "NIT Trichy has a dedicated Training and Placement Cell (T&P Cell) that facilitates the placement process for students. The institute has an excellent placement record, with a high percentage of students securing job offers from reputed companies during campus placements. The placement process typically includes pre-placement talks, written tests, group discussions, technical and HR interviews, and final job offers. The institute also encourages students to participate in internships, industrial training, and research projects to gain practical exposure and enhance their employability skills. The overall placement rate recorded during NIT Trichy BTech placements 2023 was 90.6%. Further, the overall placement rate recorded during NIT Trichy PG placements 2023 was 95.2%. The institute has also released the NIRF report 2023, according to which the 2022 median package for BTech and MTech courses stood at INR 12 LPA and INR 9.50 LPA, respectively. For BArch and MArch courses, the median package stood at INR 6 LPA and INR 5.50 LPA, respectively. Additionally, the median package offered to MBA students during NIT Trichy placements 2022 was INR 7.60 LPA.",
  }),
  new University({
    name: "NIT Rourkela",
    description: "NIT Rourkela is ranked 16th by NIRF 2023 under the Engineering category, 36th by Times 2023 under the Engineering category, and others. NIT Rourkela is one of the premier national-level institutions and is funded by the Government of India. The university is managed by the Board of Governors of the National Institute of Technology (Rourkela) Society and is registered under the Societies Act. The National Institute of Technology, Rourkela is accredited by the NBA and is ranked 59 in QS Southern Asia University Rankings 2023. Located in Rourkela, this reputed university is famous for its flagship BTech and MBA courses. Rourkela NIT, through various departments, offers UG, PG, doctoral, PhD, and various other courses to students. These courses are offered across Engineering, Management, and various other streams. National Institute of Technology, Rourkela is also ranked 676 by the QS Sustainability Ranking 2024. NITRKL offers placement assistance to students. The university is visited by top companies such as Apple, Google, Microsoft, Amazon, Wipro, Deloitte, and others. NIT Rourkela, established in 1961 as Regional Engineering College Rourkela, is one of the premier technical institutions in India. It was granted Institute of National Importance status and renamed NIT Rourkela in 2002.",
    ranking: {
      NIRF_Engineering: 16,
      Times_Engineering: 36,
      NIRF_Overall: 37,
      QS_Southern_Asia: 59,
      QS_Sustainability: 676
    },
    contact: {
      address: "National Institute of Technology Rourkela, Sector 1, Rourkela - 769008, Odisha, India.",
      phone: "+91-661-2462021",
      email: "dir@nitrkl.ac.in",
      website: "https://www.nitrkl.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Main conducted by the National Testing Agency (NTA). Admission is based on the JEE Main ranks. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "NIT Rourkela has a dedicated Training and Placement Cell (T&P Cell) that facilitates the placement process for students. The institute has a commendable placement record, with a high percentage of students securing job offers from reputed companies during campus placements. The placement process typically includes pre-placement talks, written tests, group discussions, technical and HR interviews, and final job offers. NIT Rourkela placements 2023 was concluded for the batch passing out in 2023. As per the latest report, the participating recruiters presented 1,326 job offers to the Class of 2023. The highest and average package offered during NIT Rourkela placements in 2023 was INR 83.60 LPA and INR 13.89 LPA, respectively. The top recruiters of NIT Rourkela in 2023 included Apple, Google, Microsoft, Amazon, Wipro, Deloitte, etc.",
  }),
  new University({
    name: "NIT Kurukshetra",
    description: "National Institute of Technology Kurukshetra, also known as NIT KKR, is one of the top-ranked Engineering institutes in India. The institute has been ranked 58th among the top 100 Engineering institutes in India by NIRF 2023. National Institute of Technology (NIT) Kurukshetra, was established in 1963 and is one of the 31 NITs set up by the Government of India. National Institute of Technology Kurukshetra (NIT Kurukshetra), formerly known as Regional Engineering College Kurukshetra, is one of the premier technical institutions in India. Established in 1963, NIT Kurukshetra offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, technology, and management. The institute is known for its academic excellence, research contributions, and conducive learning environment.",
    ranking: {
      NIRF_Engineering: 58
    },
    contact: {
      address: "National Institute of Technology Kurukshetra, Kurukshetra - 136119, Haryana, India.",
      phone: "+91-1744-233208",
      email: "director@nitkkr.ac.in",
      website: "https://www.nitkkr.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for the Joint Entrance Examination (JEE) Main conducted by the National Testing Agency (NTA). Admission is based on the JEE Main ranks. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "NIT Kurukshetra has a dedicated Training and Placement Cell (T&P Cell) that facilitates the placement process for students. The institute has a commendable placement record, with a high percentage of students securing job offers from reputed companies during campus placements. The placement process typically includes pre-placement talks, written tests, group discussions, technical and HR interviews, and final job offers. NIT Kurukshetra has strong industry connections and collaborations with leading companies from various sectors including IT, core engineering, consulting, finance, and more. The highest and average package offered during NIT Kurukshetra BTech placements 2023 stood at INR 62.75 LPA and INR 14.16 LPA, respectively. Further, the placement rate recorded during NIT Kurukshetra BTech placements 2023 stood at 75.74%. Apart from this, a total of 700 offers were made during NIT Kurukshetra BTech placements 2023. Apart from this, the highest and average package offered during NIT Kurukshetra MBA placements 2023 stood at INR 13.58 LPA and INR 7.69 LPA, respectively. Moreover, a total of 24 offers were made during NIT Kurukshetra MBA placements 2023."
  }),
  new University({
    name: "Indian Institute of Information Technology, Hyderabad",
    description: "IIIT Hyderabad is an autonomous technical institute located in Hyderabad, Telangana, India. Established in 1998, it is one of the premier institutions in India focused on information technology and related fields. IIIT Hyderabad offers undergraduate, postgraduate, and doctoral programs in various areas of computer science, electronics, and communication. Indian Institute of Information Technology, Hyderabad (IIITH) is a well-recognised institution for higher education. It was established in the year 1998 as a not-for-profit private partnership and is the first IIIT across the country under this model. IIIT Hyderabad has been accredited at Grade 'A ' by the National Assessment & Accreditation Council (NAAC). IIIT Hyderabad offers several UG, PG and doctoral programs. The flagship programmes offered at IIIT Hyderabad are BTech and MTech.",
    ranking: {
      NIRF_Engineering: 55
    },
    contact: {
      address: "Indian Institute of Information Technology Hyderabad, Gachibowli, Hyderabad - 500032, Telangana, India.",
      phone: "+91-40-6653-1000",
      email: "info@iiit.ac.in",
      website: "https://www.iiit.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for entrance examinations such as JEE Main conducted by the National Testing Agency (NTA) or the institute's own entrance exam. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "IIIT Hyderabad has a dedicated Career Development Center (CDC) that facilitates the placement process for students. The institute has an impressive placement record, with a high percentage of students securing job offers from reputed companies during campus placements. The placement process typically includes pre-placement talks, written tests, group discussions, technical and HR interviews, and final job offers. IIIT Hyderabad has strong industry connections and collaborations with leading companies from various sectors including IT, core engineering, consulting, finance, and more. The placement rate recorded during IIIT Hyderabad BTech placements 2023 was 100%. The overall highest package offered during IIIT Hyderabad placements 2023 stood at INR 102 LPA. Further, the overall average package offered during IIIT Hyderabad placements 2023 stood at INR 23.43 LPA. The highest package was grabbed by the student of MS BY Research CSD course. Further, the highest package offered during IIIT Hyderabad BTech CSE and ECE placements 2023 stood at INR 69 LPA and INR 45 LPA, respectively. Further, the average package offered during IIIT Hyderabad BTech CSE and ECE placements 2023 stood at INR 32.20 LPA and INR 27.24 LPA, respectively. The lowest package offered during IIIT Hyderabad BTech CSE and ECE placements 2023 stood at INR 12 LPA and INR 11 LPA, respectively."
  }),
  new University({
    name: "Indian Institute of Information Technology Allahabad",
    description: "IIIT Allahabad is an autonomous technical institute located in Allahabad (Prayagraj), Uttar Pradesh, India. Established in 1999, it is one of the premier institutions in India focused on information technology and related fields. Indian Institute of Information Technology Allahabad is one of the most prestigious institutes in India. IIIT Allahabad is ranked 89th in the Engineering category by NIRF 2023. IIIT Allahabad has been ranked by several other ranking bodies on international and national level. The QS World University Ranking has ranked IIIT Allahabad at 189th in the Southern Asia category. Additionally, IIT Allahabad is ranked 10th in the Engineering (government) category by India Today 2023. Indian Institute of Information Technology, Allahabad (IIIT) was established in 1999 and was awarded the status of deemed university status by the Government of India in 2000. In 2014, the Ministry of Human Resource Development (MHRD) recognised IIIT Allahabad as an 'Institute of National Importance'. Indian Institute of Information Technology, Allahabad offers four programmes: BTech, MTech, MBA, and PhD across four departments, namely Applied Sciences, Electronics and Communication Engineering, Information Technology, and Management Sciences. IIIT Allahabad admissions are entrance-based. IIT Allahabad entrance exams are JEE Main, DASA, GATE, CAT, etc.",
    ranking: {
      NIRF_Engineering: 89,
      QS_Asia: "551-600",
      QS_Southern_Asia: 189
    },
    contact: {
      address: "Indian Institute of Information Technology Allahabad, Deoghat, Jhalwa, Prayagraj (Allahabad) - 211015, Uttar Pradesh, India.",
      phone: "+91-532-292-2000",
      email: "director@iiita.ac.in",
      website: "https://www.iiita.ac.in/"
    },
    eligibility: "For undergraduate programs (B.Tech), candidates need to qualify for entrance examinations such as JEE Main conducted by the National Testing Agency (NTA) or the institute's own entrance exam. For postgraduate programs (M.Tech), candidates must have a valid GATE (Graduate Aptitude Test in Engineering) score. Admission is based on GATE scores and may include a written test and/or interview conducted by the institute.",
    placement: "IIIT Allahabad has a dedicated Training and Placement Cell (T&P Cell) that facilitates the placement process for students. The institute has a commendable placement record, with a high percentage of students securing job offers from reputed companies during campus placements. The placement process typically includes pre-placement talks, written tests, group discussions, technical and HR interviews, and final job offers. IIIT Allahabad placements report 2023 is not released. Earlier, the highest package offered during IIIT Allahabad placements 2022 stood at INR 102.5 LPA. Further, the average package offered during IIIT Allahabad BTech and MTech / MBA placements 2022 stood at INR 30.68 LPA and INR 19.57 LPA, respectively. Apart from this, the placement rate recorded during IIIT Allahabad UG and PG placements 2022 was 100%."
  }),
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
  }),
  new Exam({
    name: "JEE Advanced",
    description: "The second stage of the Joint Entrance Examination, granting admission to the Indian Institutes of Technology (IITs) and some other prestigious engineering colleges.",
  }),
  new Exam({
    name: "BITSAT (Birla Institute of Technology and Science Admission Test)",
    description: "Conducted for admission to undergraduate engineering programs at BITS Pilani, Goa, and Hyderabad campuses.",
  }),
  new Exam({
    name: "NEET (National Eligibility and Entrance Test)",
    description: "An entrance examination for admission to undergraduate medical and dental courses in government and private medical colleges in India.",
  }),
  new Exam({
    name: "NATA (National Aptitude Test in Architecture)",
    description: "Required for admission to undergraduate architecture programs across participating institutions in India.",
  }),
  new Exam({
    name: "NCHMCT-JEE (National Council for Hotel Management & Catering Technology’s Joint Entrance Exam)",
    description: "Entrance exam for admission to undergraduate hospitality and hotel management courses at NCHMCT-affiliated institutions.",
  }),
  new Exam({
    name: "CUET (UG) (Common University Entrance Test)",
    description: "Conducted for admission to undergraduate programs at central universities across India.",
  }),
  new Exam({
    name: "LSAT India (Law School Admission Test–India)",
    description: "For admission to undergraduate law programs in participating law schools in India.",
  }),
  new Exam({
    name: "NIFT Entrance (National Institute of Fashion Technology)",
    description: "Entrance exam for admission to undergraduate programs in fashion and design at NIFT campuses.",
  }),
  new Exam({
    name: "VITEEE (Vellore Institute of Technology Engineering Entrance Examination)",
    description: "Conducted for admission to undergraduate engineering programs at Vellore Institute of Technology (VIT) campuses.",
  }),
  new Exam({
    name: "IIMC Entrance Exam (Indian Institute of Mass Communication)",
    description: "For admission to various postgraduate diploma courses in journalism and mass communication at Indian Institute of Mass Communication.",
  }),
  new Exam({
    name: "GATE (Graduate Aptitude Test in Engineering)",
    description: "A national level examination for admission to postgraduate programs in engineering and technology across India.",
  }),
  new Exam({
    name: "MBA (Master of Business Administration)",
    description: "Entrance exams like CAT, MAT, XAT, etc., for admission to MBA programs offered by various management institutes across India.",
  }),
  new Exam({
    name: "MHT CET (Maharashtra Common Entrance Test)",
    description: "For admission to undergraduate courses in engineering, pharmacy, and agriculture in colleges in Maharashtra.",
  }),
  new Exam({
    name: "IMU CET (Indian Maritime University Common Entrance Test)",
    description: "Entrance exam for admission to undergraduate programs in maritime studies and related fields at Indian Maritime University and its affiliated institutes.",
  }),
];




Exam.insertMany(exams)
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
