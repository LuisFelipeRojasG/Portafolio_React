import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-screen bg-paper-dark overflow-x-hidden">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
