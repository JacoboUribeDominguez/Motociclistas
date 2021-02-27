import Principal from './pages/principal/principal'
import Header from './components/header/header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MisReservas from './pages/misReservas/MisReservas';
import Ayuda from './pages/ayuda/Ayuda';
import Login from './pages/login/login';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/ayuda">
            <Header />
            <Ayuda />
          </Route>
          <Route path="/misreservas">
            <Header />
            <MisReservas />
          </Route>
          <Route path="/">
            <Header />
            <div className="App" style={{padding: '50px 50px'}}>
              <Principal />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
    
  );
}

export default App;
