import './App.css'
import { Footer } from './components/Footer'
import { Login } from './components/Login'
import { Header } from './components/core/Header'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <AuthProvider>
      <Header />
      <section className="flex justify-center items-center max-h-screen">
        <Login />
      </section>
      <Footer />
    </AuthProvider>

  )
}

export default App
