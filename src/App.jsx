import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFoundPage';
import  AppBar  from './components/AppBar/AppBar';
import './App.css'


const HomePage = lazy(()=> import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const MovieCast = lazy(()=>import('./components/MovieCast'));
const MovieReviews = lazy (() => import('./components/MovieReviews'))

function App() {
 
  return (
    <div>
   
          <Routes>
            <Route path='/' element={<AppBar/>}>
            <Route index element={<HomePage/>}/>
           <Route path='/movies' element={<MoviesPage/>}/>

           <Route path='/movies/:movieId'element={<MovieDetailsPage/>}>
           <Route path="cast" element={< MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
           
           <Route path='*' element={<NotFound/>}/>
           </Route>
          </Routes>
     
     
    </div>
  )
}

export default App
