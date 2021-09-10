import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Toolbar from './Components/Toolbar';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Home from './Components/Home';

// const menu = ['menu1', 'menu2'];

function App() {
  return (
    <BrowserRouter>
      <Toolbar MyLink={Link} />
      <Switch>
        <Route path='/about'>
          <AboutMe />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/'>
          <Home MyLink={Link} />
        </Route>
        <Route exact path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const NotFound = () => {
  return <div>NotFound Error 404</div>;
};

export default App;
