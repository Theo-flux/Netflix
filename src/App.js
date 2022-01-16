import { useContext } from 'react';
import {Routes, Route} from 'react-router-dom'
import { Browse, Home, Signin, Signup }from './pages';
import {Routers }from './constants/Routers'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { firebaseContext } from './context/firebase'

function App() {
  
  // const { firebaseApp } = useContext(firebaseContext)
  // const user = firebaseApp.auth().currentUser
  // console.log(user)
  const user = 'theo'

  return (
    <Routes>
      
      <Route 
        exact
        path={Routers.SIGN_IN} 
        element={
          <IsUserRedirect 
            user={user}
            loggedInPath={Routers.BROWSE}
          >
            <Signin/>
          </IsUserRedirect>
        }
      />

    <Route 
      exact
      path={Routers.SIGN_UP} 
      element={
        <IsUserRedirect 
          user={user}
          loggedInPath={Routers.BROWSE}
        >
          <Signup/>
        </IsUserRedirect>
      }
    />

    <Route 
      exact
      path={Routers.SIGN_IN} 
      element={
        <ProtectedRoute 
          user={user}
          loggedInPath={Routers.BROWSE}
        >
          <Signin/>
        </ProtectedRoute>
      }
    />
    
    <Route 
      exact
      path={Routers.HOME} 
      element={
        <IsUserRedirect 
          user={user}
          loggedInPath={Routers.BROWSE}
        >
          <Home/>
        </IsUserRedirect>
      }
    />
    
    <Route exact path={Routers.HOME} element={<Home/>} />
    <Route exact path={Routers.BROWSE} element={<Browse/>} />
    </Routes>
  );
}

export default App;
