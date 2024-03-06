import { Route, Router } from "wouter";

import { Footer } from './components/Footer'
import { Login } from './components/Login'
import { Header } from './components/core/Header'
import { ToastContainer } from 'react-toastify';

import { Movies } from './pages/Movies'
import { Series } from './pages/Series'
import { Originals } from './pages/Originals'
import { Watchlist } from './pages/Watchlist'
import { Home } from './pages/Home'
import { useAuth } from "./hooks/useAuth";

import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header isLogin={isLoggedIn} />
      <section className="flex justify-center items-center min-h-screen overflow-auto">
        {isLoggedIn ? (
          <Router>
            <Route path="/" component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/originals" component={Originals} />
            <Route path="/watchlist" component={Watchlist} />
          </Router>
        ) : (
          <Login />
        )}
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
    </>
  )
}

export default App
