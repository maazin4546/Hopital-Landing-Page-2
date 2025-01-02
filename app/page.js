import Navbar from "@/Components/Navbar"
import Upper_Nav from "@/Components/Upper_Nav"
import Main from '@/Components/Main'
import Services from "@/Components/Services"

const page = () => {
  return (
    <div>
      <Upper_Nav />
      <Navbar />
      <Main />
      <Services />
    </div>
  )
}

export default page