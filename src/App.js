import {Routes, Route} from 'react-router-dom'
import { Home, Signin }from './pages';
import {Routers }from './constants/Routers'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ={Routers.SIGN_IN} element={<Signin/>} />
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
