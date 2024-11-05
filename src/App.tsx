import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/Home';
import { ConhecendoOSmartphone } from './pages/conhecendo-o-smartphone/Conhecendo-o-smartphone';
import { LigandoOSmartphone } from './pages/ligando-o-smartphone/Ligando-o-smartphone';


function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route  path='/' element={ <Home/> } />
          <Route  path='/conhecendo-o-smartphone' element={ <ConhecendoOSmartphone /> } />
          <Route  path='/ligando-o-smartphone' element={ <LigandoOSmartphone /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App