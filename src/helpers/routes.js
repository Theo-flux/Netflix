import { useLocation, Navigate } from 'react-router-dom'

function IsUserRedirect({ loggedInPath, children, user }) {
    
  if(user){
    return (<Navigate replace to={loggedInPath}/>)
  }else{
      return children
  } 
    
}


function ProtectedRoute({ loggedInPath, children, user }) {
  
  const location = useLocation()

  if(user){
    return (<Navigate replace to={loggedInPath} state={{ from:location }}/>)
  }else{
      return children
  } 
    
}

export { IsUserRedirect, ProtectedRoute }   