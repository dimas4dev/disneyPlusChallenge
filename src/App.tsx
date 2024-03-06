import './App.css'
import { Footer } from './components/Footer'
import { Login } from './components/Login'
import { Header } from './components/core/Header'
import { AuthProvider } from './context/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <AuthProvider>
      <Header />
      <section className="flex justify-center items-center max-h-screen">
        <Login />
      </section>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </AuthProvider>

  )
}

export default App
