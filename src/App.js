import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import {Routers }from './constants/Routers'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ={Routers.SIGN_UP} element={<>Sign up</>} />
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
