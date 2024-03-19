import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Header } from './Components/Header/Header';
import { MovieDetails } from './Components/MovieDetails/MovieDetails';
import { PgNotFound } from './Components/ERROR/PgNotFound';
import { Footer } from './Components/Footer/Footer';


function App() {

  return (
    <div className=''>
      <Router>
          <Header/>
          <div className='mx-10'>
            <Routes>
              <Route path='/' exact Component={Home}/>
              <Route path='/movie/:imdbID' Component={MovieDetails}/>
              <Route Component={PgNotFound}/>
            </Routes>
          </div>
          <Footer/>
      </Router>
    </div>
  )
}

export default App