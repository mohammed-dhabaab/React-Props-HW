import Navbar from "./components/Navbar/Navbar"
import Programs from "./components/Programs/Programs"
import RegistrationInfo from "./components/RegistrationInfo/RegistrationInfo"
import AdultsCards from "./components/AdultsCards/AdultsCards"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <main className="main">
      <Navbar />
      <p className="top-title">أكاديمية طويق</p>
      <Programs />
      <AdultsCards />
      <div className="load-more-container">
        <button className="button">تحميل المزيد</button>
      </div>
      <RegistrationInfo />

      <Footer />
    </main>
  )
}

export default App
