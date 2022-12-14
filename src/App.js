import React from 'react'; 
import { Container} from '@material-ui/core'; 

import Navbar from './components/Navbar/Navbar'; 
import Home from './Home/Home'; 
import Auth from './components/Auth/Auth'; 

import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

const App = () => {

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App; 