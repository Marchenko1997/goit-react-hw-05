import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFoundPage';
import { AppBar } from './components/AppBar/AppBar';
import './App.css'

const HomePage = lazy(()=> import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));

function App() {
 
  return (
    <div>
      <AppBar>
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
           <Route path='/movies' element={<MoviesPage/>}/>
           <Route path='/movies/:movieId'element={<MovieDetailsPage/>}/>
           <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Suspense>
      </AppBar>
     
    </div>
  )
}

export default App
