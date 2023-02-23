import Details from "./sections/details/Details"
import Footer from "./sections/footer/Footer"
import Header from "./sections/header/Header"
import ImgBackground from "./sections/imgBackground/imgBackground"
import Main from "./sections/main/Main"
import Plans from "./sections/plans/Plans"
import './index.css'

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Details/>
      <ImgBackground/>
      <Plans/>
      <Footer/>
    </>
  )
}

export default App
