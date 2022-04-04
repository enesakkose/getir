import Header from "./components/Header"
import Cards from "./components/Cards"
import Categories from "./components/Categories"
import Favorites from "./components/Favorites"
import Footer from "./components/Footer"
import Campaigns from "./components/Campaigns"
import Hero from "./components/Hero"
import Mobileapp from "./components/Mobileapp"
import { useWindowWidth }from '@react-hook/window-size'

function App() {

  const windowWidth = useWindowWidth()

  return (
   <>
   <Header />
   {windowWidth <= 768 && <Campaigns />}
   <Hero />
   <Categories />
   {windowWidth > 768 && <Campaigns />}
   <Favorites />
   <Mobileapp />
   <Cards />
   <Footer />
   </>
  )
}

export default App
