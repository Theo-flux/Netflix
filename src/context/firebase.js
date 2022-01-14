import { createContext } from 'react'
import { firebaseApp } from '../lib/firebase.prod'

const firebaseContext = createContext()

function FirebaseContextProvider({ children }){
    return(
        <firebaseContext.Provider value={ { firebaseApp } }>
            { children }
        </firebaseContext.Provider>
    )
}

export { firebaseContext, FirebaseContextProvider}


