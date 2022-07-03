import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Inicio from './components/pages/Inicio'
import Traduccion from './components/pages/Traduccion'
import Nosotros from './components/pages/Nosotros'
import Contactos from './components/pages/Contactos'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Inicio} />
          <Route path='/traduccion' component={Traduccion} />
          <Route path='/nosotros' component={Nosotros} />
          <Route path='/traducciones' component={Traduccion}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
