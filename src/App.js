import {Routes, Route} from 'react-router-dom'
import { Browse, Home, Signin, Signup }from './pages';
import {Routers }from './constants/Routers'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ={Routers.BROWSE} element={<Browse/>} />
        <Route exact path ={Routers.SIGN_IN} element={<Signin/>} />
        <Route exact path ={Routers.SIGN_UP} element={<Signup/>} />
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
