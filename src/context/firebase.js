import { createContext } from "react";
import {initializeApp}  from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseContext = createContext()

const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  }
  
const app = initializeApp( firebaseConfig )

function firebaseContextProvider({ children, value }){
    return(
        <firebaseContext.Provider value={app}>
            { children }
        </firebaseContext.Provider>
    )
}

export { firebaseContext, firebaseContextProvider}


