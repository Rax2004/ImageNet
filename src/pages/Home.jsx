import Description from "../components/Description"
import Generate from "../components/Generate"
import Header from "../components/Header"
import Steps from "../components/Steps"
import Testimonial from "../components/Testimonial"

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Testimonial/>
      <Generate/>
    </div>
  )
}

export default Home
Home