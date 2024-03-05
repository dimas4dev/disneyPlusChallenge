import './App.css'
import { Login } from './components/Login'
import { Header } from './components/core/Header'

function App() {

  return (
    <>
      <Header />
      <section className="flex justify-center items-center max-h-screen">

        <Login />
      </section>

    </>
  )
}

export default App
