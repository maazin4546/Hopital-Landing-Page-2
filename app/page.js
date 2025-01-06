import Navbar from "@/Components/Navbar"
import Upper_Nav from "@/Components/Upper_Nav"
import Main from '@/Components/Main'
import Services from "@/Components/Services"
import DocInfo from "@/Components/DocInfo"
import Departments from "@/Components/Departments"
import Doctors from "@/Components/Doctors"
import QualityCare from "@/Components/QualityCare"
import Appointment from "@/Components/Appointment"
import Records from "@/Components/Records"
import Features from "@/Components/Features"
import Thank from "@/Components/Thank"
import News from "@/Components/News"
import Footer from "@/Components/Footer"

const page = () => {
  return (
    <div>
      <Upper_Nav />
      <Navbar />
      <Main />
      <Services />
      <DocInfo/>
      <Departments/>
      <Doctors/>
      <QualityCare/>
      <Appointment/>
      <Records/>
      <Features/>
      <Thank/>
      <News/>
      <Footer/>
    </div>
  )
}

export default page